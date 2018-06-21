import * as datastore from 'node-persist';
import {CacheInterface} from './CacheInterface'

export class FileSystemCache implements CacheInterface {
  init() {
    datastore.initSync();
  }

  set(key: string, value: string) {
    datastore.setItemSync(key, value);
  }

  get(key: string): string {
    return datastore.getItemSync(key);
  }

  clear() {
    datastore.clearSync();
  }
}
