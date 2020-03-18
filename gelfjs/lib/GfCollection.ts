/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { cloneDeep, keys } from "lodash";

import ArrayConvertible from "./ArrayConvertible";
import GfcField, { TypeFieldValue } from "./GfcField";
import JsonConvertible from "./JsonConvertible";

export default class GfCollection implements ArrayConvertible, JsonConvertible {
  private readonly fields: GfcField[] = [];

  constructor(entries: GfcField[]) {
    this.addAll(entries);
  }

  add(field: GfcField) {
    this.fields.push(field);
    return this;
  }

  addAll(fields: GfcField[]) {
    fields.forEach(this.add.bind(this));
    return this;
  }

  toJSON() {
    return this.toArray().map(field => field.toJSON());
  }

  toArray(): GfcField[] {
    return cloneDeep(this.fields);
  }

  static fromObject(obj: {[k: string]: TypeFieldValue}): GfCollection {
    return new GfCollection([...keys(obj).map(key => new GfcField(key, obj[key]))]);
  }
}
