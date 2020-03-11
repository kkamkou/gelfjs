/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import {CfgBuilder} from "./CfgBuilder";

export class CfgConfig {
  private constructor(private readonly proxy: CfgBuilder) {}

  get fields() {
    return this.proxy.fields;
  }
}
