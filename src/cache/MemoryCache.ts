import {CacheInterface} from './CacheInterface';

export class MemoryCache implements CacheInterface {
  private static cache = {};

  init() {}

  set(key: string, value: string) {
    MemoryCache.cache[key] = value;
  }

  get(key: string): string {
    return MemoryCache.cache[key];
  }

  clear() {
    MemoryCache.cache = {};
  }
}
