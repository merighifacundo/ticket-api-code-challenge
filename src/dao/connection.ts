import {Sequelize} from 'sequelize-typescript';
import {Claim} from '../models/claim';

const sequelize =  new Sequelize('claims', 'claims', 'claims#2020', {
  host: 'localhost',
	dialect: 'mysql',
	models: [Claim]
});

export default sequelize;