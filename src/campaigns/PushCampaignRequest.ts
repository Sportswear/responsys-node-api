import { CampaignRequest } from './CampaignRequest'

export class PushCampaignRequest extends CampaignRequest {
  constructor(offset: number = 0, limit: number = 200) {
    super('push', offset, limit)
  }
}
