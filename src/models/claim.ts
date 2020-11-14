import {Table, Column, Model, PrimaryKey} from 'sequelize-typescript';
 
export enum ClaimStatus {
	PENDING = 0,
	WORK_IN_PROGRESS = 1,
	DONE = 2
}

@Table
export class Claim extends Model<Claim> {
	
	@PrimaryKey
  @Column
	claimId!: string;
 
  @Column
	ticketId!: string;
 
	@Column
	status: ClaimStatus = ClaimStatus.PENDING;
  
}