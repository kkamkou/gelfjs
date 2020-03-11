/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */
import noop from "lodash";

import { CfgPropField } from "./CfgPropField";

export class CfgBuilder {
  private fieldList: CfgPropField[] = [];

  constructor() {
    noop();
  }

  fields(fields: CfgPropField[]) {
    this.fieldList = fields;
    return this;
  }

  build() {
    return {
      fields: this.fieldList
    };
  }
}
