/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import GfMessage from "./GfMessage";
import GfField from "./GfField";

export default interface GfmTransform {
  transform(fields: GfField[]): Promise<GfMessage>;
}
