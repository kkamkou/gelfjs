/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

import GfField from "./GfField";

export default interface GfmFilter {
  accept(fields: GfField[]): Promise<boolean>;
}
