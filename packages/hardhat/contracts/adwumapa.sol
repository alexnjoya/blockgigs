// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; // For ownership and admin control
import "@openzeppelin/contracts/security/ReentrancyGuard.sol"; // For reentrancy protection

contract CombinedContract is Ownable, ReentrancyGuard {
	IERC20 public stablecoin; // Stablecoin address
	IERC20 public usdcToken; // USDC token address

	constructor(address _stablecoin, address _usdcToken) Ownable() {
		require(_stablecoin != address(0), "Invalid stablecoin address");
		require(_usdcToken != address(0), "Invalid USDC address");
		stablecoin = IERC20(_stablecoin);
		usdcToken = IERC20(_usdcToken);
	}

	event PaymentProcessed(address indexed recipient, uint256 amount);
	event PaymentWithdrawn(address indexed recipient, uint256 amount);
	event EmergencyWithdrawal(address indexed to, uint256 amount);
	event ProjectCreated(
		uint256 projectId,
		address employer,
		address freelancer
	);
	event MilestoneCompleted(uint256 projectId, uint256 milestoneId);
	event PaymentReleased(uint256 projectId, uint256 milestoneId);
	event DisputeRaised(uint256 projectId, uint256 milestoneId);
	event DisputeResolved(
		uint256 projectId,
		uint256 milestoneId,
		bool favorFreelancer
	);
	event ProjectClosed(uint256 projectId);

	// Payment processing functions
	function processPayment(
		address recipient,
		uint256 amount
	) external onlyOwner {
		require(recipient != address(0), "Invalid recipient address");
		require(amount > 0, "Amount must be greater than 0");
		uint256 balance = stablecoin.balanceOf(address(this));
		require(balance >= amount, "Insufficient contract balance");
		stablecoin.transfer(recipient, amount);
		emit PaymentProcessed(recipient, amount);
	}

	function withdraw(uint256 amount) external onlyOwner {
		require(amount > 0, "Amount must be greater than 0");
		uint256 balance = stablecoin.balanceOf(address(this));
		require(balance >= amount, "Insufficient contract balance");
		stablecoin.transfer(msg.sender, amount);
		emit PaymentWithdrawn(msg.sender, amount);
	}

	function emergencyWithdraw(address to, uint256 amount) external onlyOwner {
		require(to != address(0), "Invalid recipient address");
		require(amount > 0, "Amount must be greater than 0");
		uint256 balance = stablecoin.balanceOf(address(this));
		require(balance >= amount, "Insufficient contract balance");
		stablecoin.transfer(to, amount);
		emit EmergencyWithdrawal(to, amount);
	}

	function updateStablecoin(address _stablecoin) external onlyOwner {
		require(_stablecoin != address(0), "Invalid stablecoin address");
		stablecoin = IERC20(_stablecoin);
	}

	// Project management functions
	enum DisputeStatus {
		None,
		Raised,
		Resolved
	}

	struct Milestone {
		uint256 amount;
		bool isCompleted;
		DisputeStatus disputeStatus;
	}

	struct Project {
		address employer;
		address freelancer;
		uint256 milestoneCount;
		mapping(uint256 => Milestone) milestones;
		bool isActive;
		bool isDisputed;
		address arbitrator;
	}

	mapping(uint256 => Project) public projects;
	uint256 public projectCount;

	modifier onlyEmployer(uint256 projectId) {
		require(msg.sender == projects[projectId].employer, "Not the employer");
		_;
	}

	modifier onlyFreelancer(uint256 projectId) {
		require(
			msg.sender == projects[projectId].freelancer,
			"Not the freelancer"
		);
		_;
	}

	modifier onlyArbitrator(uint256 projectId) {
		require(
			msg.sender == projects[projectId].arbitrator,
			"Not the arbitrator"
		);
		_;
	}

	function createProject(
		address _freelancer,
		uint256[] calldata milestoneAmounts,
		address _arbitrator
	) external nonReentrant {
		require(_arbitrator != address(0), "Invalid arbitrator address");
		projectCount++;
		Project storage project = projects[projectCount];
		project.employer = msg.sender;
		project.freelancer = _freelancer;
		project.arbitrator = _arbitrator;
		project.milestoneCount = milestoneAmounts.length;
		project.isActive = true;

		for (uint256 i = 0; i < milestoneAmounts.length; i++) {
			project.milestones[i] = Milestone({
				amount: milestoneAmounts[i],
				isCompleted: false,
				disputeStatus: DisputeStatus.None
			});
		}

		emit ProjectCreated(projectCount, msg.sender, _freelancer);
	}

	function completeMilestone(
		uint256 projectId,
		uint256 milestoneId
	) external onlyFreelancer(projectId) nonReentrant {
		Project storage project = projects[projectId];
		require(project.isActive, "Project is not active");
		require(
			!project.milestones[milestoneId].isCompleted,
			"Milestone already completed"
		);
		require(
			project.milestones[milestoneId].disputeStatus == DisputeStatus.None,
			"Milestone is in dispute"
		);
		project.milestones[milestoneId].isCompleted = true;
		emit MilestoneCompleted(projectId, milestoneId);
	}

	function releasePayment(
		uint256 projectId,
		uint256 milestoneId
	) external onlyEmployer(projectId) nonReentrant {
		Project storage project = projects[projectId];
		require(
			project.milestones[milestoneId].isCompleted,
			"Milestone not completed"
		);
		require(
			project.milestones[milestoneId].disputeStatus == DisputeStatus.None,
			"Milestone is in dispute"
		);
		uint256 amount = project.milestones[milestoneId].amount;
		usdcToken.transfer(project.freelancer, amount);
		emit PaymentReleased(projectId, milestoneId);
	}

	function raiseDispute(
		uint256 projectId,
		uint256 milestoneId
	) external onlyEmployer(projectId) nonReentrant {
		Project storage project = projects[projectId];
		require(project.isActive, "Project is not active");
		require(
			project.milestones[milestoneId].isCompleted,
			"Milestone not completed"
		);
		project.milestones[milestoneId].disputeStatus = DisputeStatus.Raised;
		project.isDisputed = true;
		emit DisputeRaised(projectId, milestoneId);
	}

	function resolveDispute(
		uint256 projectId,
		uint256 milestoneId,
		bool favorFreelancer
	) external onlyArbitrator(projectId) nonReentrant {
		Project storage project = projects[projectId];
		require(project.isDisputed, "No dispute to resolve");
		if (favorFreelancer) {
			uint256 amount = project.milestones[milestoneId].amount;
			usdcToken.transfer(project.freelancer, amount);
		}
		project.milestones[milestoneId].disputeStatus = DisputeStatus.Resolved;
		project.isDisputed = false;
		emit DisputeResolved(projectId, milestoneId, favorFreelancer);
	}

	function closeProject(
		uint256 projectId
	) external onlyEmployer(projectId) nonReentrant {
		Project storage project = projects[projectId];
		require(project.isActive, "Project is not active");
		require(
			!project.isDisputed,
			"Cannot close a project with an ongoing dispute"
		);
		project.isActive = false;
		emit ProjectClosed(projectId);
	}

	// Function to allow owner to withdraw any ERC20 tokens mistakenly sent to the contract
	function withdrawTokens(IERC20 token, uint256 amount) external onlyOwner {
		token.transfer(owner(), amount);
	}

	// Function to allow owner to update the USDC token address if needed
	function updateUsdcToken(address newUsdcToken) external onlyOwner {
		usdcToken = IERC20(newUsdcToken);
	}
}
