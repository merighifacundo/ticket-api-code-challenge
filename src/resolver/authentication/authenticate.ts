import AuthenticationService from '../../services/authentication.service';
import {
  AuthenticateRequest,
  AuthenticateResponse,
} from '../../schema/authenticate';
import { Role, User } from '../../models/user';

export default async (
  root: any,
  params: any,
): Promise<AuthenticateResponse> => {
  const authenticateRequest: AuthenticateRequest = params.data;
  const user: User = await AuthenticationService.authenticate(
    authenticateRequest.username,
    authenticateRequest.password,
  );
  console.log(user);
  const userInformation = {
    username: user.username,
    firstName: user.firstName,
    role: Role[user.role],
  };
  console.log(userInformation);
  const jwtToken = await AuthenticationService.sign(userInformation);
  return { jwtToken };
};
