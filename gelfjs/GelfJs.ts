/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import {overEvery, reduce} from "lodash";

import {TypeGfcField} from "./types";

import Adapter from "./Adapter";
import CfgBuilder from "./CfgBuilder";
import CfgConfig from "./CfgConfig";
import GfcField from "./GfcField";
import GfCollection from "./GfCollection";
import GfcTransform from "./GfcTransform";
import GfMessage from "./GfMessage";

class GelfJs {
  private readonly config: CfgConfig;

  constructor(adapter: Adapter) {
    this.config = new CfgBuilder(adapter).build();
    /*
      forEach(this.config.verbosity().levels(), (lvl, lvlName) => {
        (this as any)[lvlName] = (message: string, extra: TypeGfcField):
          Promise<unknown> => this.message(message, lvl, extra)
      });
      forEach(this.config.verbosity().aliases(), (lvlName, alias) => {
        (this as any)[alias] = (this as any)[lvlName];
      });
    */
  }

  async message(message: string, level: number, extra?: TypeGfcField): Promise<unknown> {
    const collection = reduce<GfcTransform, GfCollection>(
      this.config.transformers(),
      (collection, transformer) =>
        transformer.transform.bind(transformer).call(undefined, collection),
      GfCollection.fromObject(extra || {})
        .addAll(this.config.fields())
        .add(new GfcField('level', level))
        .add(new GfcField('short_message', message))
    );

    const filters = this.config.filters();
    if (filters.length && !overEvery(filters.map(f => f.accept.bind(f)))(collection)) {
      return Promise.reject();
    }

    return this.config.adapter().send(new GfMessage(collection));
  }
}

export = GelfJs;
