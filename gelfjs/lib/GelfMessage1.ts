/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { forOwn, isFinite, isPlainObject, toString, truncate } from "lodash";
import GelfSpec from "./GelfSpec";

export class GelfMessage1 {
  private readonly obj = {} as GelfSpec;

  constructor(
    private readonly message: NonNullable<string>,
    private readonly level: NonNullable<string>,
    private readonly extra: object | Function) {
  }

  toString() {
    const result = Object.assign({}, this.obj);

    result.timestamp = Math.floor(Date.now() / 1000);

    // recursion function for key-value aggregation
    // 32766 bytes is the maximum length for a field
    const recursion = function (input: object, prefix?: string): void {
      forOwn(input, function (value, key) {
        if ((/[^\w-.]/).test(key)) {
          throw SyntaxError(key + ': the key format is not valid');
        }
        if (isPlainObject(value)) {
          return recursion(value, prefix ? [prefix, key].join('_') : key);
        }
        result[(prefix ? [null, prefix, key] : [null, key]).join('_')] =
          isFinite(value) ? value : truncate(toString(value), {length: 32765}); // 32765 + 1
      });
    };

    return JSON.stringify(recursion(result));
  }
}
