/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { forOwn, isFinite, isPlainObject, isUndefined, merge, toString, truncate } from "lodash";

import GfMessageSpec from "./GfMessageSpec";
import GmField from "./GmField";

export default class GfMessage {
  private readonly obj: GfMessageSpec = {
    host: 'unknown',
    short_message: 'No message', // eslint-disable-line
    timestamp: Math.floor(Date.now() / 1000),
    version: '1.1'
  };

  constructor(private readonly fields?: GmField[]) {}

  toJSON() {
    return merge({}, this.obj, ...(this.fields || []).map(field => field.toJSON()));
  }

  toString(): string {
    const obj = this.toJSON(),
      result: {[idx: string]: string | number} = {};

    // some fields should be copied without change
    ['full_message', 'short_message', 'level', 'host', 'timestamp'].forEach(function (key) {
      if (!isUndefined(obj[key])) {
        result[key] = obj[key];
        delete obj[key];
      }
    });

    // recursion function for key-value aggregation
    // 32766 bytes is the maximum length for a field
    const recursion = function (input: object, prefix?: string): void {
      forOwn(input, function (value, key) {
        if ((/[^\w-.]/).test(key)) {
          throw SyntaxError(`Key format is not valid (${key})`);
        }
        if (isPlainObject(value)) {
          return recursion(value, prefix ? [prefix, key].join('_') : key);
        }
        result[(prefix ? [null, prefix, key] : [null, key]).join('_')] =
          isFinite(value) ? value : truncate(toString(value), {length: 32765}); // 32765 + 1
      });
    };

    recursion(obj);

    return JSON.stringify(result);
  }
}
