/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import Verbosity from "./Verbosity";

export default class VbDefault implements Verbosity {
  aliases(): { [p: string]: string } {
    return {log: 'debug', warn: 'warning'};
  }

  levels(): { [p: string]: number } {
    return {
      emergency: 0,
      alert: 1,
      critical: 2,
      error: 3,
      warning: 4,
      notice: 5,
      info: 6,
      debug: 7
    };
  }
}
