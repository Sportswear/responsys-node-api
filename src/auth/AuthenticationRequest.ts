import { Request } from '../commons/Request';
import { AuthConfig } from './AuthConfig';
import { TYPE_PASSWORD } from './../Constants';


export class AuthenticationRequest extends Request {
  constructor() {
    super({
      user_name: AuthConfig.username,
      password: AuthConfig.password,
      auth_type: TYPE_PASSWORD
    }, AuthConfig.endpoint);
  }
}
