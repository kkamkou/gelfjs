/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { cloneDeep } from "lodash";

import Adapter from "./Adapter";
import GfField from "./GfField";
import GfmFilter from "./GfmFilter";
import GfmTransform from "./GfmTransform";
import Verbosity from "./Verbosity";

export default class CfgConfig {
  constructor(
    private readonly _adapter: Adapter,
    private readonly _fields: GfField[],
    private readonly _filters: GfmFilter[],
    private readonly _verbosity: Verbosity,
    private readonly _transformers: GfmTransform[]
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

