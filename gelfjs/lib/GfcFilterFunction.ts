/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import GfCollection from "./GfCollection";
import GfcFilter from "./GfcFilter";

export default class GfcFilterFunction implements GfcFilter {
  constructor(private readonly fnc: Function) {}

  accept(collection: GfCollection): boolean {
    return this.fnc.call(undefined, collection);
  }
}
