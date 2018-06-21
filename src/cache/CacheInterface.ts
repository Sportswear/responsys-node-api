export interface CacheInterface {
  init();
  set(key: string, value: string);
  get(key: string): string;
  clear();
}
