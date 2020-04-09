/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import {isError} from "lodash";

import GfcField from "./GfcField";
import GfCollection from "./GfCollection";
import GfcTransform from "./GfcTransform";

class GftFieldError implements GfcTransform {
  transform(collection: GfCollection): GfCollection {
    const fields = collection.toArray().map(field => {
      const value = field.content();
      if (!isError(value)) {
        return field;
      }
      return new GfcField(field.name(), {message: value.message, stack: value.stack});
    });
    return new GfCollection(fields);
  }
}

export = GftFieldError;
