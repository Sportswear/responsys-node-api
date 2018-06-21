import { Request } from '../commons/Request';
import { RecipientData } from './RecipientData';
import { CONTENT_TYPE_JSON } from './../Constants';

export class TriggerEmailMessageRequest extends Request {
  constructor(recipients: Set<RecipientData>, campaign: string) {
    super({
      recipientData: Array.from(recipients)
    }, `/rest/api/v1.3/campaigns/${campaign}/email`, {
      'Content-Type': CONTENT_TYPE_JSON
    });
  }
}
