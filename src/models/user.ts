import {
  Table, Column, Model, PrimaryKey,
} from 'sequelize-typescript';

export enum Role {
  ADMIN,
  CONSUMER,
}

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  userId!: number;

  @Column
  username!: string;

  @Column
  password!: String;

  @Column
  role: Role = Role.CONSUMER;

  @Column
  firstName!: string;

  @Column
  lastName!: string;
}
