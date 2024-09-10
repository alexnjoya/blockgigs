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

  // ... existing tests ...

  describe("Create Project", function () {
    it("should allow a client to create a project", async () => {
      const projectAmount = ethers.parseEther("1");
      await adwumapa.connect(client).deposit(freelancer.address, { value: projectAmount });
      await adwumapa
        .connect(client)
        .createProject(projectAmount, "Project Title", "Project Description", 0, 1000, "Revision Policy");
      const project = await adwumapa.projects(client.address);
      expect(project.title).to.equal("Project Title");
      expect(project.amount).to.equal(projectAmount);
    });

    it("should revert if project amount is zero", async () => {
      await expect(
        adwumapa.connect(client).createProject(0, "Project Title", "Project Description", 0, 1000, "Revision Policy"),
      ).to.be.revertedWith("Amount must be greater than 0");
    });

    it("should revert if sent value does not match project amount", async () => {
      await expect(
        adwumapa
          .connect(client)
          .createProject(ethers.parseEther("1"), "Project Title", "Project Description", 0, 1000, "Revision Policy", {
            value: ethers.parseEther("0.5"),
          }),
      ).to.be.revertedWith("Sent value must match the project amount");
    });
  });

  describe("Create Milestone", function () {
    it("should allow a client to create a milestone for a project", async () => {
      const projectAmount = ethers.parseEther("1");
      await adwumapa.connect(client).deposit(freelancer.address, { value: projectAmount });
      await adwumapa
        .connect(client)
        .createProject(projectAmount, "Project Title", "Project Description", 0, 1000, "Revision Policy");
      await adwumapa.connect(client).createMilestone(ethers.parseEther("0.5"), "Milestone Description");
      const project = await adwumapa.projects(client.address);
      expect(project.milestones.length).to.equal(1);
      expect(project.milestones[0].description).to.equal("Milestone Description");
    });

    it("should revert if no freelancer is assigned", async () => {
      await expect(
        adwumapa.connect(client).createMilestone(ethers.parseEther("0.5"), "Milestone Description"),
      ).to.be.revertedWith("No freelancer assigned");
    });

    it("should revert if total milestone amounts exceed project amount", async () => {
      const projectAmount = ethers.parseEther("1");
      await adwumapa.connect(client).deposit(freelancer.address, { value: projectAmount });
      await adwumapa
        .connect(client)
        .createProject(projectAmount, "Project Title", "Project Description", 0, 1000, "Revision Policy");
      await adwumapa.connect(client).createMilestone(ethers.parseEther("0.5"), "Milestone Description");
      await expect(
        adwumapa.connect(client).createMilestone(ethers.parseEther("0.6"), "Another Milestone"),
      ).to.be.revertedWith("Total milestone amounts exceed project amount");
    });
  });
});
