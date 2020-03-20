/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import Adapter from "./Adapter";
import CfgConfig from "./CfgConfig";
import GfcField from "./GfcField";
import GfcFilter from "./GfcFilter";
import GfcTransform from "./GfcTransform";
import GfcTransformFieldExclude from "./GfcTransformFieldExclude";
import VbDefault from "./VbDefault";
import Verbosity from "./Verbosity";

class CfgBuilder {
  private lstField: GfcField[] = [];
  private lstFilters: GfcFilter[] = [];
  private lstTransformers: GfcTransform[] = [new GfcTransformFieldExclude(['id'])];
  private logLevels: Verbosity = new VbDefault();

  constructor(private readonly adapter: Adapter) {}

  fields(lst: GfcField[]) {
    this.lstField = lst;
    return this;
  }

  filters(lst: GfcFilter[]) {
    this.lstFilters = lst;
    return this;
  }

  levels(levels: Verbosity) {
    this.logLevels = levels;
    return this;
  }

  transformers(lst: GfcTransform[]) {
    this.lstTransformers = lst;
    return this;
  }

  build(): CfgConfig {
    return new CfgConfig(
      this.adapter, this.lstField, this.lstFilters, this.lstTransformers, this.logLevels
    );
  }
}

export = CfgBuilder;
