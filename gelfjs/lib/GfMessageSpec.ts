/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

export default interface GfMessageSpec {
  full_message?: string; // eslint-disable-line
  host: string;
  level?: number;
  short_message: string; // eslint-disable-line
  timestamp?: number;
  version: string;
}
