// packages/subgraph/src/mapping.ts
import { BigInt } from "@graphprotocol/graph-ts";
import {
  PaymentProcessed as PaymentProcessedEvent,
  Deposit as DepositEvent,
  PaymentReleased as PaymentReleasedEvent,
  ProjectCompleted as ProjectCompletedEvent,
  MilestoneCompleted as MilestoneCompletedEvent,
  ProjectCreated as ProjectCreatedEvent,
  MilestoneCreated as MilestoneCreatedEvent,
} from "../generated/Adwumapa/Adwumapa";
import {
  PaymentProcessed,
  Deposit,
  PaymentReleased,
  ProjectCompleted,
  MilestoneCompleted,
  ProjectCreated,
  MilestoneCreated,
  Milestone,
} from "../generated/schema";

export function handlePaymentProcessed(event: PaymentProcessedEvent): void {
  let entity = new PaymentProcessed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.recipient = event.params.recipient;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(event.transaction.hash.toHex());
  entity.sender = event.params.sender;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handlePaymentReleased(event: PaymentReleasedEvent): void {
  let entity = new PaymentReleased(event.transaction.hash.toHex());
  entity.client = event.params.client;
  entity.freelancer = event.params.freelancer;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleProjectCompleted(event: ProjectCompletedEvent): void {
  let entity = new ProjectCompleted(event.transaction.hash.toHex());
  entity.client = event.params.client;
  entity.freelancer = event.params.freelancer;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleMilestoneCompleted(event: MilestoneCompletedEvent): void {
  let entity = new MilestoneCompleted(event.transaction.hash.toHex());
  entity.client = event.params.client;
  entity.freelancer = event.params.freelancer;
  entity.milestoneIndex = event.params.milestoneIndex;
  entity.amount = event.params.amount;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
}

export function handleProjectCreated(event: ProjectCreatedEvent): void {
  let entity = new ProjectCreated(event.transaction.hash.toHex());
  entity.client = event.params.client;
  entity.amount = event.params.amount;
  entity.title = event.params.title;
  entity.description = event.params.description;
  entity.startDate = event.params.startDate;
  entity.endDate = event.params.endDate;
  entity.revisionPolicy = event.params.revisionPolicy;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  // Handle milestones
  let milestones = event.params.milestones;
  let milestoneEntities: string[] = [];
  for (let i = 0; i < milestones.length; i++) {
    let milestoneEntity = new Milestone(
      event.transaction.hash.toHex() + "-" + i.toString()
    );
    if (milestones[i]) {
      // milestoneEntity.id = milestones[i].id.toString();
      // milestoneEntity.amount = milestones[i].amount;
      // milestoneEntity.description = milestones[i].description;
      milestoneEntity.save();
      milestoneEntities.push(milestoneEntity.id);
    }
  }
  entity.milestones = milestoneEntities;

  entity.save();
}

export function handleMilestoneCreated(event: MilestoneCreatedEvent): void {
  let entity = new MilestoneCreated(
    event.transaction.hash.toHex() + "-" + event.params.milestoneId.toString()
  );
  entity.client = event.params.client;
  entity.milestoneId = event.params.milestoneId;
  entity.amount = event.params.amount;
  entity.description = event.params.description;
  entity.save();
}