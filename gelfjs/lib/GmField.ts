/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { isFunction } from "lodash";

export default class GmField {
  constructor(
    private readonly label: string,
    private readonly value: string | number | (() => string | number)
  ) {
    if (label === 'id') {
      throw Error('A field named "id" is not allowed by the specification');
    }
  }

  get name() {
    return this.label;
  }

  get content() {
    return isFunction(this.value) ? (this.value as Function).call(undefined) : this.value;
  }

  toJSON() {
    return {[this.name]: this.content};
  }
}
