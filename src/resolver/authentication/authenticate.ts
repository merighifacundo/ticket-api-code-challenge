import jwt from 'jsonwebtoken';
import UserService from '../../services/user.service';
import {
  AuthenticateRequest,
  AuthenticateResponse,
} from '../../schema/authenticate';
import { User } from '../../models/user';

export default async (
  root: any,
  params: any,
): Promise<AuthenticateResponse> => {
  const authenticateRequest: AuthenticateRequest = params.data;
  const user: User = await UserService.authenticate(
    authenticateRequest.username,
    authenticateRequest.password,
  );
  const jwtToken = await jwt.sign(user, 'ABCDEF', {
    expiresIn: '10h',
  });
  return { jwtToken };
};
