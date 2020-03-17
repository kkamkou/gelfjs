/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { isFunction } from "lodash";
import JsonConvertible from "./JsonConvertible";

export type TypeFieldValue = string | number | object | (() => string | number | object);

export default class GfcField implements JsonConvertible {
  constructor(
    private readonly label: string,
    private readonly value: TypeFieldValue
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
