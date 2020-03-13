/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import Adapter from "../lib/Adapter";
import GfMessage from "../lib/GfMessage";

export default class AdrHttpFetch implements Adapter {
  constructor(
    private readonly requestInfo: RequestInfo,
    private readonly requestInit?: RequestInit
  ) {}

  init(): Promise<unknown> {
    // this adapter has no set-up functionality
    return Promise.resolve();
  }

  destroy(): Promise<unknown> {
    // this adapter has no tear-down functionality
    return Promise.resolve();
  }

  send(message: GfMessage): Promise<Response> {
    return fetch(new Request(this.requestInfo, this.requestInit));
  }
}
