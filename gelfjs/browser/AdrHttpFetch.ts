/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import fetch from "isomorphic-fetch";
import { merge } from "lodash";

import Adapter from "../lib/Adapter";
import GfMessage from "../lib/GfMessage";

export default class AdrHttpFetch implements Adapter {
  constructor(
    private readonly requestInfo: RequestInfo,
    private readonly requestInit?: RequestInit
  ) {}

  async init(): Promise<void> {
    // this adapter has no set-up functionality
    return Promise.resolve();
  }

  async destroy(): Promise<void> {
    // this adapter has no tear-down functionality
    return Promise.resolve();
  }

  async send(message: GfMessage): Promise<Response> {
    const init = merge(
      {headers: {'content-type': 'application/json'}, method: 'post', body: message.toString()},
      this.requestInit
    );
    return fetch(new Request(this.requestInfo, init));
  }

  static Smart = class {
    adapter: AdrHttpFetch;

    constructor(url: string, options: object) {
      this.adapter = new AdrHttpFetch(url, options as RequestInit);
    }

    async send(message: GfMessage): Promise<Response> {
      return this.adapter.send(message);
    }
  }
}
