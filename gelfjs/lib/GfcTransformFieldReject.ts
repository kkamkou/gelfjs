/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import GfCollection from "./GfCollection";
import GfcTransform from "./GfcTransform";

export default class GfcTransformFieldReject implements GfcTransform {
  constructor(private readonly fieldsToFilter: string[]) {
    if (!fieldsToFilter.length) {
      throw new Error('At least one name of the field is needed, none given');
    }
  }

  transform(collection: GfCollection): Promise<GfCollection> {
    const fields = collection.toArray().filter(field => !this.fieldsToFilter.includes(field.name));
    return Promise.resolve(new GfCollection(fields));
  }
}
