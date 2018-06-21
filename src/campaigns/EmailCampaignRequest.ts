import { CampaignRequest } from './CampaignRequest'

export class EmailCampaignRequest extends CampaignRequest {
  constructor(offset: number = 0, limit: number = 200) {
    super('email', offset, limit)
  }
}
