/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import {call, forEach, invokeMap, overEvery} from "lodash";

import {GfcFieldValue} from "./types";

import Adapter from "./Adapter";
import CfgBuilder from "./CfgBuilder";
import CfgConfig from "./CfgConfig";
import GfcField from "./GfcField";
import GfCollection from "./GfCollection";
import GfMessage from "./GfMessage";

class GelfJs {
  private readonly config: CfgConfig;

  constructor(adapter: Adapter) {
    this.config = new CfgBuilder(adapter).build();
    forEach(this.config.verbosity().levels(), (lvl, lvlName) => {
      (this as any)[lvlName] = (message: string, extra: {[k: string]: GfcFieldValue}):
        Promise<unknown> => this.message(message, lvl, extra)
    });
    forEach(this.config.verbosity().aliases(), (lvlName, alias) => {
      (this as any)[alias] = (this as any)[lvlName];
    });
  }

  async message(
    message: string, level: number, extra?: {[k: string]: GfcFieldValue}
  ): Promise<unknown> {
    const collection = GfCollection.fromObject(extra || {})
      .addAll(this.config.fields())
      .add(new GfcField('level', level))
      .add(new GfcField('short_message', message));

    const transformers = this.config.transformers();
    if (transformers.length) {
      invokeMap(transformers.map(t => t.transform.bind(t)), call, undefined, collection);
    }

    const filters = this.config.filters();
    if (filters.length && !overEvery(filters.map(f => f.accept.bind(f)))(collection)) {
      return Promise.reject();
    }

    return this.config.adapter().send(new GfMessage(collection));
  }
}

export = GelfJs;
