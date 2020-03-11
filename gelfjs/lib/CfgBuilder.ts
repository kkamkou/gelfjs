/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { GelfField } from "./GelfField";

export class CfgBuilder {
  private fields: GelfField[] = [];

  fields(fields: GelfField[]) {
    this.fields = fields;
    return this;
  }

  build() {
    return {
      fields: this.fieldList
    };
  }
}
