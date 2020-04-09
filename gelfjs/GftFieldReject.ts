/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import {FIELD_NAME_REGEXP} from "./GelfSpec";
import GfCollection from "./GfCollection";
import GfcTransform from "./GfcTransform";

class GftFieldReject implements GfcTransform {
  constructor(private readonly additionalFields: string[] = []) {}

  transform(collection: GfCollection): GfCollection {
    let fields = collection.toArray().filter(field => !FIELD_NAME_REGEXP.test(field.name()));
    if (this.additionalFields.length) {
      fields = fields.filter(field => !this.additionalFields.includes(field.name()));
    }
    return new GfCollection(fields);
  }
}

export = GftFieldReject;
