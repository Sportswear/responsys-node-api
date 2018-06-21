import * as rest from 'rest';
import { Client } from '../commons/Client';
import { ListMembersRequest } from './ListMembersRequest';
import { ListsRequest } from './ListsRequest';

export class Lists extends Client {
  get(request: ListsRequest): rest.ResponsePromise {
    return super.call(request);
  }

  member(request: ListMembersRequest): rest.ResponsePromise {
    return super.call(request);
  }
}
