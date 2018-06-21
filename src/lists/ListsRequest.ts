import { CONTENT_TYPE_JSON, HTTP_METHOD_GET } from './../Constants';
import { Request } from '../commons/Request';

export class ListsRequest extends Request {
  constructor() {
    super(null, '/rest/api/v1.3/lists', {
      'Content-Type': CONTENT_TYPE_JSON
    }, HTTP_METHOD_GET);
  }
}
