import { CONTENT_TYPE_JSON, HTTP_METHOD_GET } from './../Constants';
import { Request } from '../commons/Request';

export class CampaignRequest extends Request {
  constructor(type: string, offset: number = 0, limit: number = 200) {
    super(null,
      `/rest/api/v1.3/campaigns?type=${type}&offset=${offset}&limit=${limit}`,
      {
        'Content-Type': CONTENT_TYPE_JSON
      }, HTTP_METHOD_GET);
  }
}
