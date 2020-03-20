/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import GfCollection from "./GfCollection";
import GfcTransform from "./GfcTransform";

class GfcTransformFieldExclude implements GfcTransform {
  constructor(private readonly fieldsToFilter: string[]) {
    if (!fieldsToFilter.length) {
      throw new Error('At least one name of the field is needed, none given');
    }
  }

  transform(collection: GfCollection): GfCollection {
    const fields = collection.toArray().filter(field => !this.fieldsToFilter.includes(field.name));
    return new GfCollection(fields);
  }
}

export = GfcTransformFieldExclude;
