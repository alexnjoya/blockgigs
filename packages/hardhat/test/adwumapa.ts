const { expect } = require("chai");
const { ethers } = require("hardhat");
// import Adwumapa from "../deploy/adwumapa_deploy";

describe("Adwumapa", function () {
  let Adwumapa: any;
  let adwumapa: any;
  let owner: any;
  let client: any;
  let freelancer: any;

  beforeEach(async function () {
    [owner, client, freelancer] = await ethers.getSigners();
    Adwumapa = await ethers.getContractFactory("Adwumapa");
    adwumapa = await Adwumapa.deploy();
    await adwumapa.deployed();
  });

  it("should allow owner to process payment", async function () {
    await owner.sendTransaction({
      to: adwumapa.address,
      value: ethers.utils.parseEther("10"),
    });

    await expect(adwumapa.processPayment(client.address, ethers.utils.parseEther("1")))
      .to.emit(adwumapa, "PaymentProcessed")
      .withArgs(client.address, ethers.utils.parseEther("1"));
  });

  it("should allow owner to withdraw funds", async function () {
    await owner.sendTransaction({
      to: adwumapa.address,
      value: ethers.utils.parseEther("10"),
    });

    await expect(adwumapa.withdraw(ethers.utils.parseEther("1")))
      .to.emit(adwumapa, "PaymentWithdrawn")
      .withArgs(owner.address, ethers.utils.parseEther("1"));
  });

  it("should allow owner to emergency withdraw funds", async function () {
    await owner.sendTransaction({
      to: adwumapa.address,
      value: ethers.utils.parseEther("10"),
    });

    await expect(adwumapa.emergencyWithdraw(client.address, ethers.utils.parseEther("1")))
      .to.emit(adwumapa, "EmergencyWithdrawal")
      .withArgs(client.address, ethers.utils.parseEther("1"));
  });

  it("should allow client to deposit funds", async function () {
    await expect(adwumapa.connect(client).deposit(freelancer.address, { value: ethers.utils.parseEther("1") }))
      .to.emit(adwumapa, "Deposit")
      .withArgs(client.address, ethers.utils.parseEther("1"));
  });

  it("should allow client to complete project and release payment", async function () {
    await adwumapa.connect(client).deposit(freelancer.address, { value: ethers.utils.parseEther("1") });

    await expect(adwumapa.connect(client).completeProject())
      .to.emit(adwumapa, "ProjectCompleted")
      .withArgs(client.address, freelancer.address, ethers.utils.parseEther("1"));
  });

  it("should allow client to release payment", async function () {
    await owner.sendTransaction({
      to: adwumapa.address,
      value: ethers.utils.parseEther("10"),
    });

    await expect(adwumapa.connect(client).releasePayment(freelancer.address, ethers.utils.parseEther("1")))
      .to.emit(adwumapa, "PaymentReleased")
      .withArgs(client.address, freelancer.address, ethers.utils.parseEther("1"));
  });

  it("should allow client to complete milestone and release payment", async function () {
    await adwumapa.connect(client).addMilestone(ethers.utils.parseEther("1"));
    await adwumapa.connect(client).deposit(freelancer.address, { value: ethers.utils.parseEther("1") });

    await expect(adwumapa.connect(client).completeMilestone(0))
      .to.emit(adwumapa, "MilestoneCompleted")
      .withArgs(client.address, freelancer.address, 0, ethers.utils.parseEther("1"));
  });

  it("should allow client to add milestone", async function () {
    await expect(adwumapa.connect(client).addMilestone(ethers.utils.parseEther("1")))
      .to.emit(adwumapa, "MilestoneCompleted")
      .withArgs(client.address, freelancer.address, 0, ethers.utils.parseEther("1"));
  });
});
