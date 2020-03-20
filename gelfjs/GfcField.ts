/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { isFunction } from "lodash";

import { GfcFieldValue } from "./types";

import JsonConvertible from "./JsonConvertible";

class GfcField implements JsonConvertible {
  constructor(
    private readonly label: string,
    private readonly value: GfcFieldValue | (() => GfcFieldValue)
  ) {}

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

export = GfcField;
