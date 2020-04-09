/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import {isFunction} from "lodash";

import JsonConvertible from "./JsonConvertible";
import {TypeGfcFieldValue} from "./types";

class GfcField implements JsonConvertible {
  constructor(
    private readonly label: string,
    private readonly value: TypeGfcFieldValue | (() => TypeGfcFieldValue)
  ) {}

  name() {
    return this.label;
  }

  content() {
    return isFunction(this.value)
      ? (this.value as Function).call(undefined)
      : this.value;
  }

  toJSON() {
    return {[this.name()]: this.content()};
  }
}

export = GfcField;
