/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { uniqBy } from "lodash";

import Adapter from "./Adapter";
import CfgConfig from "./CfgConfig";
import GfField from "./GfField";
import GfmFilter from "./GfmFilter";
import GfmTransform from "./GfmTransform";
import VbDefault from "./VbDefault";
import Verbosity from "./Verbosity";

export default class CfgBuilder {
  private lstField: GfField[] = [];
  private lstFilters: GfmFilter[] = [];
  private lstTransformers: GfmTransform[] = [];
  private logLevels: Verbosity = new VbDefault();

  constructor(private readonly adapter: Adapter) {}

  fields(lst: GfField[]) {
    this.lstField = lst;
    return this;
  }

  filters(lst: GfmFilter[]) {
    this.lstFilters = lst;
    return this;
  }

  levels(levels: Verbosity) {
    this.logLevels = levels;
    return this;
  }

  transformers(lst: GfmTransform[]) {
    this.lstTransformers = lst;
    return this;
  }

  build(): CfgConfig {
    return new CfgConfig(
      this.adapter, uniqBy(this.lstField, 'name'), this.lstFilters, this.logLevels,
      this.lstTransformers
    );
  }
}
