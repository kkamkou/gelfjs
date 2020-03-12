/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

export default interface Adapter {
  init(): Promise<unknown>;
  send(payload: string): Promise<unknown>;
  destroy(): Promise<unknown>;
}
