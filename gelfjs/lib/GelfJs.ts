/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { keys } from "lodash";

import Adapter from "./Adapter";
import CfgBuilder from "./CfgBuilder";
import CfgConfig from "./CfgConfig";
import GfField, { TypeFieldValue } from "./GfField";
import GfMessage from "./GfMessage";

// move  fields to collection

export default class GelfJs {
  constructor(private readonly config: CfgConfig) {}

  send(message: GfMessage): Promise<unknown> {
    return this.config.adapter().send(message);
  }

  static Smart = class {
    private gelfJs: GelfJs;

    constructor(adapter: Adapter) {
      this.gelfJs = new GelfJs(new CfgBuilder(adapter).build());
    }

    async message(
      message: string, lvl: number, extra: {[k: string]: TypeFieldValue}
    ): Promise<unknown> {
      const fields = this.gelfJs.config.fields().concat([
        new GfField('level', lvl),
        new GfField('short_message', message),
        ...keys(extra).map(key => new GfField(key, extra[key]))
      ]);

      try {
        await Promise.all(this.gelfJs.config.filters().map(filter => filter.accept(fields)));
      } catch (e) {
        return Promise.reject(e);
      }

      return this.gelfJs.send(new GfMessage(fields));
    }
  }
}
