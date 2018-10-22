import { ERROR } from '../Constants';
import { CacheInterface } from '../cache/CacheInterface'
import { FileSystemCache } from '../cache/FileSystemCache'
import { MemoryCache } from '../cache/MemoryCache'

export class AuthConfig {
  static caches = {MemoryCache, FileSystemCache};

  static endpoint: string;
  static username: string;
  static password: string;
  static expires: number;
  static cache: CacheInterface;

  static init(endpoint?: string, username?: string, password?: string, expires?: number, cache?: CacheInterface) {
    this.setEndpoint(endpoint);
    this.setPassword(password);
    this.setUsername(username);
    this.setExpires(expires);
    this.setCache(cache);

    if (this.isDataValid()) {
      throw new Error(ERROR +
        `Endpoint: ${this.endpoint} Username: ${this.username} No Password: ${!this.password}`);
    }
  }

  static setEndpoint(endpoint): void {
    this.endpoint =
      endpoint || process.env.RESPONSYS_AUTH_ENDPOINT;
  }

  static setUsername(username): void {
    this.username =
      username || process.env.RESPONSYS_USERNAME;
  }

  static setPassword(password): void {
    this.password =
      password || process.env.RESPONSYS_PASSWORD;
  }

  static setExpires(expires): void {
    this.expires =
      expires || process.env.RESPONSYS_AUTH_EXPIRES || 60 * 60 * 1000;
  }

  static setCache(cache): void {
    this.cache = cache || MemoryCache;
  }

  static isDataValid() : boolean {
    return (!this.password || !this.username || !this.endpoint);
  }
}
