import { Request } from '../commons/Request';
import { AuthCache } from './AuthCache';
import { AuthConfig } from './AuthConfig';
import {
  CONTENT_TYPE_URLENCODED,
  TYPE_TOKEN
} from '../Constants';

export class RefreshRequest extends Request {
  constructor(previousToken?: string) {
    const authCache = new AuthCache();
    const token = previousToken ? previousToken : authCache.getToken();

    const header = {
      'Content-Type': CONTENT_TYPE_URLENCODED,
      Authorization: token
    };

    super({
      auth_type: TYPE_TOKEN
    }, AuthConfig.endpoint, header);
  }
}
