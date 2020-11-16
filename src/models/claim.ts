import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './user';

export enum ClaimStatus {
  PENDING = 0,
  WORK_IN_PROGRESS = 1,
  DONE = 2,
}

@Table
export class Claim extends Model<Claim> {
  @PrimaryKey
  @Column
  claimId!: string;

  @Column
  ticketId!: string;

  @Column
  status!: ClaimStatus;

  @Column
  description!: string;

  @Column
  resolution!: string;

  @ForeignKey(() => User)
  @Column
  consumerId!: number;

  @BelongsTo(() => User)
  consumer!: User;

  @ForeignKey(() => User)
  @Column
  resolverId!: number;

  @BelongsTo(() => User)
  resolver!: User;
}
