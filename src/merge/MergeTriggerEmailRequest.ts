import { Request } from '../commons/Request';
import { MergeTriggerRecordData } from './MergeTriggerRecordData';
import {
  CONTENT_TYPE_JSON,
  MERGER_RULE
} from './../Constants';

export class MergeTriggerEmailRequest extends Request {
  constructor(mergeTriggerRecordData: MergeTriggerRecordData, campaign: string) {
    super({
      mergeTriggerRecordData,
      mergeRule: MERGER_RULE
    }, `/rest/api/v1.3/campaigns/${campaign}/email`, {
      'Content-Type': CONTENT_TYPE_JSON
    });
  }
}
