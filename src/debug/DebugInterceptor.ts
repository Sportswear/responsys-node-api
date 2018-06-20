import * as interceptor from 'rest/interceptor';
import debug from 'debug';

const log = debug('responsys-node-api')
const logger = thing => {
  log(thing)
  return thing
}

export class DebugInterceptor {
  public get() {
    return interceptor({
      request: logger,
      response: logger
    });
  }
}
