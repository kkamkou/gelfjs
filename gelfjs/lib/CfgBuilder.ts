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

export default class CfgBuilder {
  private lstField: GfField[] = [];
  private lstFilters: GfmFilter[] = [];
  private lstTransformers: GfmTransform[] = [];

  constructor(private readonly adapter: Adapter) {}

  fields(lst: GfField[]) {
    this.lstField = lst;
    return this;
  }

  filters(lst: GfmFilter[]) {
    this.lstFilters = lst;
    return this;
  }

  transformers(lst: GfmTransform[]) {
    this.lstTransformers = lst;
    return this;
  }

  build() {
    return {
      adapter: cloneDeep(this.adapter),
      fields: [...this.lstField],
      filters: [...this.lstFilters],
      transformers: [...this.lstTransformers]
    };
  }
}
