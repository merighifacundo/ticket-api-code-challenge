import { Sequelize } from 'sequelize-typescript';
import { Claim } from '../models/claim';
import { User } from '../models/user';

const sequelize = new Sequelize('claims', 'claims', 'claims#2020', {
  host: 'localhost',
  dialect: 'mysql',
  models: [User, Claim],
});

export default sequelize;
