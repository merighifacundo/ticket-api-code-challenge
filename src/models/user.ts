import {
  Table, Column, Model, PrimaryKey,
} from 'sequelize-typescript';

export enum Role {
  ADMIN = 0,
  CONSUMER = 1,
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
  role!: Role;

  @Column
  firstName!: string;

  @Column
  lastName!: string;
}
