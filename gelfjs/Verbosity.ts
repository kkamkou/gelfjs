/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

export default interface Verbosity {
  aliases(): {[k: string]: string};
  levels(): {[k: string]: number};
}
