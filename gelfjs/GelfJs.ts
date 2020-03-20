/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import { call, forEach, invokeMap, overEvery } from "lodash";

import { GfcFieldValue } from "./types";

import Adapter from "./Adapter";
import CfgBuilder from "./CfgBuilder";
import CfgConfig from "./CfgConfig";
import GfcField from "./GfcField";
import GfCollection from "./GfCollection";
import GfMessage from "./GfMessage";

class GelfJs {
  constructor(private readonly config: CfgConfig) {}

  send(message: GfMessage): Promise<unknown> {
    return this.config.adapter().send(message);
  }

  static Smart = class {
    gelfJs: GelfJs;

    constructor(adapter: Adapter) {
      const config = new CfgBuilder(adapter).build();
      forEach(config.verbosity().levels(), (lvl, lvlName) => {
        (this as any)[lvlName] = (message: string, extra: {[k: string]: GfcFieldValue}):
          Promise<unknown> => this.message(message, lvl, extra)
      });
      forEach(config.verbosity().aliases(), (lvlName, alias) => {
        (this as any)[alias] = (this as any)[lvlName];
      });
      this.gelfJs = new GelfJs(config);
    }

    async message(
      message: string, level: number, extra: {[k: string]: GfcFieldValue}
    ): Promise<unknown> {
      const collection = GfCollection.fromObject(extra)
        .addAll(this.gelfJs.config.fields())
        .add(new GfcField('level', level))
        .add(new GfcField('short_message', message));

      const transformers = this.gelfJs.config.transformers();
      if (transformers.length) {
        invokeMap(transformers.map(t => t.transform.bind(t)), call, undefined, collection);
      }

      const filters = this.gelfJs.config.filters();
      if (filters.length && !overEvery(filters.map(f => f.accept.bind(f)))(collection)) {
        return Promise.reject();
      }

      return this.gelfJs.send(new GfMessage(collection));
    }
  }
}

export = GelfJs;
