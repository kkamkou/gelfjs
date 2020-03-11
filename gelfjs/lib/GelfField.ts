/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { isFunction } from "lodash-es";

export class GelfField {
  constructor(
    private readonly label: string,
    private readonly value: string | (() => string)
  ) {}

  get name() {
    return this.label;
  }

  get content() {
    return isFunction(this.value) ? this.value.call(null) : this.value;
  }
}
