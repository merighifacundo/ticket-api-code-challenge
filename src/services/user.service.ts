import * as bcrypt from 'bcryptjs';
import { ApolloError } from 'apollo-server';
import { User } from '../models/user';
import db from '../dao/connection';

export default class UserService {
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
}
