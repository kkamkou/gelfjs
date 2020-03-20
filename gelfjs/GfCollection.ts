/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { cloneDeep, keys } from "lodash";

import ArrayConvertible from "./ArrayConvertible";
import GfcField from "./GfcField";
import JsonConvertible from "./JsonConvertible";
import { GfcFieldValue } from "./types";

class GfCollection implements ArrayConvertible, JsonConvertible {
  private readonly fields = new Set<GfcField>();

  constructor(entries: GfcField[]) {
    this.addAll(entries);
  }

  add(field: GfcField) {
    this.fields.add(field);
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
    return cloneDeep(Array.from(this.fields));
  }

  static fromObject(obj: {[k: string]: GfcFieldValue}): GfCollection {
    return new GfCollection([...keys(obj).map(key => new GfcField(key, obj[key]))]);
  }
}

export = GfCollection;
