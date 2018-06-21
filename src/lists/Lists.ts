import * as rest from 'rest';
import { ListsRequest } from './ListsRequest';
import { Client } from '../commons/Client';

export class Lists extends Client {
  get(request: ListsRequest): rest.ResponsePromise {
    return super.call(request);
  }
}
