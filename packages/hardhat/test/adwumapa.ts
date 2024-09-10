import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Adwumapa } from "../typechain-types";

describe("Adwumapa", function () {
  let client: SignerWithAddress, freelancer: SignerWithAddress;
  let adwumapa: Adwumapa;

  before(async () => {
    [client, freelancer] = await ethers.getSigners();

    // Deploy the Adwumapa contract
    const AdwumapaFactory = await ethers.getContractFactory("Adwumapa");
    adwumapa = await AdwumapaFactory.deploy();
    await adwumapa.waitForDeployment();
  });

  describe("Deposit", function () {
    it("should allow a client to deposit Ether", async () => {
      const depositAmount = ethers.parseEther("1");
      await adwumapa.connect(client).deposit(freelancer.address, { value: depositAmount });
      const balance = await adwumapa.clientBalances(client.address);
      expect(balance).to.equal(depositAmount);
    });

    it("should revert if deposit amount is zero", async () => {
      await expect(adwumapa.connect(client).deposit(freelancer.address, { value: 0 })).to.be.revertedWith(
        "Amount must be greater than 0",
      );
    });
  });

  describe("Complete Project", function () {
    it("should allow a client to complete a project and release payment", async () => {
      const depositAmount = ethers.parseEther("1");
      await adwumapa.connect(client).deposit(freelancer.address, { value: depositAmount });
      await adwumapa.connect(client).completeProject();
      const balance = await adwumapa.clientBalances(client.address);
      expect(balance).to.equal(0);
    });

    it("should revert if no freelancer is assigned", async () => {
      await expect(adwumapa.connect(client).completeProject()).to.be.revertedWith("No freelancer assigned");
    });
  });

  describe("Release Payment", function () {
    it("should allow a client to release payment to a freelancer", async () => {
      const depositAmount = ethers.parseEther("1");
      await adwumapa.connect(client).deposit(freelancer.address, { value: depositAmount });
      await adwumapa.connect(client).releasePayment(freelancer.address, depositAmount);
      const balance = await adwumapa.clientBalances(client.address);
      expect(balance).to.equal(0);
    });

    it("should revert if insufficient balance", async () => {
      await expect(adwumapa.connect(client).releasePayment(freelancer.address, 1)).to.be.revertedWith(
        "Insufficient balance",
      );
    });
  });

  describe("Create Project", function () {
    it("should allow a client to create a project", async () => {
      const projectAmount = ethers.parseEther("1");
      const title = "Test Project";
      const description = "This is a test project.";
      const startDate = Math.floor(Date.now() / 1000);
      const endDate = startDate + 86400; // 1 day later
      const revisionPolicy = "No revisions";

      await adwumapa
        .connect(client)
        .createProject(projectAmount, title, description, startDate, endDate, revisionPolicy, { value: projectAmount });

      const project = await adwumapa.projects(client.address);
      expect(project.amount).to.equal(projectAmount);
      expect(project.title).to.equal(title);
      expect(project.description).to.equal(description);
    });

    it("should revert if project amount is zero", async () => {
      await expect(
        adwumapa.connect(client).createProject(0, "Test Project", "Description", 0, 0, "No revisions", { value: 0 }),
      ).to.be.revertedWith("Amount must be greater than 0");
    });

    it("should revert if sent value does not match project amount", async () => {
      const projectAmount = ethers.parseEther("1");
      await expect(
        adwumapa.connect(client).createProject(projectAmount, "Test Project", "Description", 0, 0, "No revisions", {
          value: ethers.parseEther("0.5"),
        }),
      ).to.be.revertedWith("Sent value must match the project amount");
    });
  });

  describe("Create Milestone", function () {
    before(async () => {
      const projectAmount = ethers.parseEther("1");
      const title = "Test Project";
      const description = "This is a test project.";
      const startDate = Math.floor(Date.now() / 1000);
      const endDate = startDate + 86400; // 1 day later
      const revisionPolicy = "No revisions";

      // Create a project before testing milestones
      await adwumapa
        .connect(client)
        .createProject(projectAmount, title, description, startDate, endDate, revisionPolicy, { value: projectAmount });
    });

    it("should allow a client to create a milestone", async () => {
      const milestoneAmount = ethers.parseEther("0.5");
      const milestoneDescription = "First milestone";
      await adwumapa.connect(client).createMilestone(milestoneAmount, milestoneDescription);

      // const project = await adwumapa.projects(client.address);
      // expect(project.milestones.length).to.equal(1);
      // expect(project.milestones[0].amount).to.equal(milestoneAmount);
      // expect(project.milestones[0].description).to.equal(milestoneDescription);
    });

    it("should revert if milestone amount is zero", async () => {
      await expect(adwumapa.connect(client).createMilestone(0, "Invalid milestone")).to.be.revertedWith(
        "Amount must be greater than 0",
      );
    });

    // it("should revert if no freelancer is assigned", async () => {
    //   await adwumapa
    //     .connect(client)
    //     .deposit("0x0000000000000000000000000000000000000000", { value: ethers.parseEther("1") });
    //   await expect(
    //     adwumapa.connect(client).createMilestone(ethers.parseEther("0.5"), "Milestone without freelancer"),
    //   ).to.be.revertedWith("No freelancer assigned");
    // });

    it("should revert if total milestone amounts exceed project amount", async () => {
      const milestoneAmount = ethers.parseEther("1.5"); // Exceeds project amount
      await expect(adwumapa.connect(client).createMilestone(milestoneAmount, "Exceeding milestone")).to.be.revertedWith(
        "Total milestone amounts exceed project amount",
      );
    });
  });
});
