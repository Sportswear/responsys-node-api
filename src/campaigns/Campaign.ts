import * as rest from 'rest';
import { Client } from '../commons/Client';
import { EmailCampaignRequest } from './EmailCampaignRequest';
import { PushCampaignRequest } from './PushCampaignRequest';

export class Campaign extends Client {
  email(request: EmailCampaignRequest): rest.ResponsePromise {
    return super.call(request);
  }

  push(request: PushCampaignRequest): rest.ResponsePromise {
    return super.call(request);
  }
}
