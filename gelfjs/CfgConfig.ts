/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { cloneDeep } from "lodash";

import Adapter from "./Adapter";
import GfcField from "./GfcField";
import GfcFilter from "./GfcFilter";
import GfcTransform from "./GfcTransform";
import Verbosity from "./Verbosity";

class CfgConfig {
  constructor(
    private readonly _adapter: Adapter,
    private readonly _fields: GfcField[],
    private readonly _filters: GfcFilter[],
    private readonly _transformers: GfcTransform[],
    private readonly _verbosity: Verbosity
  ) {}

  adapter() {
    return cloneDeep(this._adapter);
  }

  fields() {
    return cloneDeep(this._fields);
  }

  filters() {
    return cloneDeep(this._filters);
  }

  verbosity() {
    return cloneDeep(this._verbosity);
  }

  transformers() {
    return cloneDeep(this._transformers);
  }
}

export = CfgConfig;
