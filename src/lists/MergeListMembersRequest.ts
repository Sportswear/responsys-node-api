import { CONTENT_TYPE_JSON, HTTP_METHOD_POST, MERGER_RULE } from './../Constants';
import { MergeListMembersRecordData } from './MergeListMembersRecordData'
import { Request } from '../commons/Request';

export class MergeListMembersRequest extends Request {
  constructor(
    recordData: MergeListMembersRecordData,
    list: string,
    mergeRuleOverrides: object = {}
  ) {
    super(
      {
        recordData,
        mergeRule: {...MERGER_RULE, ...mergeRuleOverrides}
      },
      `/rest/api/v1.3/lists/${list}/members`,
      {
        'Content-Type': CONTENT_TYPE_JSON
      }, HTTP_METHOD_POST
    );
  }
}
