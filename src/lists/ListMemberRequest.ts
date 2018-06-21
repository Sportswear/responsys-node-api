import { CONTENT_TYPE_JSON, HTTP_METHOD_GET } from './../Constants';
import { Request } from '../commons/Request';

export class ListMemberRequest extends Request {
  constructor(list: string, attribute: string, value: string, fields: string[] = ['all']) {
    super(
      null,
      `/rest/api/v1.3/lists/${list}/members?qa=${attribute}&id=${value}&fs=${fields.join(',')}`,
      {
        'Content-Type': CONTENT_TYPE_JSON
      }, HTTP_METHOD_GET
    );
  }
}
