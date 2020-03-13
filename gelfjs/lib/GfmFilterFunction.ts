/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import GfField from "./GfField";
import GfmFilter from "./GfmFilter";

export default class GfmFilterFunction implements GfmFilter {
  constructor(private readonly fnc: Function) {}

  accept(fields: GfField[]): Promise<boolean> {
    return this.fnc.call(undefined, fields);
  }
}
