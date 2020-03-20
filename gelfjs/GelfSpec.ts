/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

export default interface GelfSpec {
  host: string;
  short_message: string; // eslint-disable-line
  timestamp: number;
  version: '1.1';
  [k: string]: string | number;
}
