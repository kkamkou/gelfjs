/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import Adapter from "./Adapter";
import GfMessage from "./GfMessage";

class AdrNull implements Adapter {
  destroy(): Promise<void> {
    return Promise.resolve();
  }

  init(): Promise<void> {
    return Promise.resolve();
  }

  // eslint-disable-next-line
  send(message: GfMessage): Promise<void> {
    return Promise.resolve();
  }
}

export = AdrNull;
