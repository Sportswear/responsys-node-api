import { AuthConfig } from './AuthConfig';
import { CacheInterface } from '../cache/CacheInterface';

import {
  KEY_ENDPOINT,
  KEY_TOKEN,
  KEY_ISSUED_AT
} from '../Constants';

export class AuthCache {
  private cache: CacheInterface;

  constructor (cache?: CacheInterface) {
    if (cache) {
      this.cache = cache;
    } else {
      const klass: any = AuthConfig.cache;
      this.cache = new klass();
    }

    this.cache.init();
  }

  set(authResponse) {
    this.cache.set(KEY_TOKEN, authResponse.authToken);
    this.cache.set(KEY_ENDPOINT, authResponse.endPoint);
    this.cache.set(KEY_ISSUED_AT, authResponse.issuedAt);
  }

  getToken(): string {
    return this.cache.get(KEY_TOKEN);
  }

  getEndpoint(): string {
    return this.cache.get(KEY_ENDPOINT);
  }

  getIssued(): string {
    return this.cache.get(KEY_ISSUED_AT);
  }

  isValid(): boolean {
    if (!this.getToken()) {
      return false;
    }

    const issuedAt = this.getIssued();
    if (!issuedAt) {
      return false;
    }

    return Date.now() - parseInt(issuedAt, 10) < AuthConfig.expires;
  }

  clear(): void {
    this.cache.clear();
  }
}
