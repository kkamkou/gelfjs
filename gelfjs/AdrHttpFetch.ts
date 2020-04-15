/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import {merge} from "lodash";

import Adapter from "./Adapter";
import GfMessage from "./GfMessage";

class AdrHttpFetch implements Adapter {
  constructor(
    private readonly requestInfo: RequestInfo,
    private readonly requestInit?: RequestInit
  ) {}

  init(): Promise<void> {
    // this adapter has no set-up functionality
    return Promise.resolve();
  }

  destroy(): Promise<void> {
    // this adapter has no tear-down functionality
    return Promise.resolve();
  }

  send(message: GfMessage): Promise<Response> {
    const init = merge(
      {headers: {'content-type': 'application/json'}, method: 'post', body: message.toString()},
      this.requestInit
    );
    return this._fetch()(new Request(this.requestInfo, init));
  }

  // this function is needed for testing and custom implementations
  protected _fetch(): Function {
    return fetch;
  }
}

export = AdrHttpFetch;
