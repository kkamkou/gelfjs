/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import GfMessage from "./GfMessage";

export default interface Adapter {
  init(): Promise<unknown>;
  destroy(): Promise<unknown>;
  send(message: GfMessage): Promise<unknown>;
}
