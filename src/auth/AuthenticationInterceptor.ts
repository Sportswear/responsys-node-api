import * as interceptor from 'rest/interceptor';
import { AuthCache } from '../auth/AuthCache';

export class AuthInterceptor {

  private authCache = new AuthCache();

  public get() {
    return interceptor({
      success: (response, config, meta) => {
        this.authCache.set(response.entity);
        return response;
      }
    });
  }
}
