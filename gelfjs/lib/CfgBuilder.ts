/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import GmField from "./GmField";
import GmFilter from "./GmFilter";

export default class CfgBuilder {
  private propFields: GmField[] = [];
  private propFilters: GmFilter[] = [];

  fields(fields: GmField[]) {
    this.propFields = fields;
    return this;
  }

  filters(filters: GmFilter[]) {
    this.propFilters = filters;
    return this;
  }

  build() {
    return {
      fields: this.propFields,
      filters: this.propFilters
    };
  }
}
