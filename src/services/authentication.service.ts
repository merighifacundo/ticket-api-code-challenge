import * as bcrypt from 'bcryptjs';
import { ApolloError } from 'apollo-server';
import { User } from '../models/user';
import db from '../dao/connection';
import jwt from 'jsonwebtoken';

export interface UserInformation {
  username:string,
  firstName:string,
  role:any
}

export default class AuthenticationService {
  public static async authenticate(username, password) : Promise<User> {
    const repository = db.getRepository(User);
    const user = await repository.findOne({ where: { username } });
    if (!user) {
      throw new ApolloError('Invalid Credentials', 'INV_CRED');
    }
    const compareResult = await bcrypt.compare(password, user.password);
    if (!compareResult) {
      throw new ApolloError('Invalid Credentials', 'INV_CRED');
    }
    return user;
  }

  public static async sign(userInformation:UserInformation) : Promise<string> {
    return jwt.sign(userInformation, 'ABCDEF', {
      expiresIn: '10h',
    });
  }
  public static async getLoggedUser(authorization:string | undefined) {
    if (!authorization) {
      return null;
    }
    try {
      const userInformation =  await jwt.verify(authorization, 'ABCDEF');
      return userInformation;
    } catch (error) {
      console.log('error verifying the token');
      throw error;
    }
  }
}
