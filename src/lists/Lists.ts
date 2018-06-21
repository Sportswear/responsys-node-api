import * as rest from 'rest';
import { Client } from '../commons/Client';
import { ListMemberRequest } from './ListMemberRequest';
import { ListsRequest } from './ListsRequest';
import { MergeListMembersRequest } from './MergeListMembersRequest';

export class Lists extends Client {
  get(request: ListsRequest): rest.ResponsePromise {
    return super.call(request);
  }

  member(request: ListMemberRequest): rest.ResponsePromise {
    return super.call(request);
  }

  updateMembers(request: MergeListMembersRequest): rest.ResponsePromise {
    return super.call(request)
  }
}
