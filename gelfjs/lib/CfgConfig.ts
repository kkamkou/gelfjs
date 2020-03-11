/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import {CfgBuilder} from "./CfgBuilder";

export class CfgConfig {
  private constructor(private readonly proxy: CfgBuilder) {}

  get fields() {
    return this.proxy.fields;
  }

  get filters() {
    return this.proxy.filters;
  }

  get interceptors() {
    return this.proxy.interceptors;
  }

  get subscribers() {
    return this.proxy.subscribers;
  }

  get levels() {
    return this.proxy.levels;
  }

  get aliases() {
    return this.proxy.aliases;
  }

  get adapter() {
    return this.proxy.adapter;
  }
}

