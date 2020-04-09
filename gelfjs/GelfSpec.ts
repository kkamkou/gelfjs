/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

const FIELD_NAME_REGEXP = /[^\w\-.]/;

const FIELD_VALUE_MAX_LENGTH = 32765; // (32766 - 1); 32766 bytes is the maximum length for a field

interface Message {
  host: string;
  short_message: string; // eslint-disable-line
  timestamp: number;
  version: '1.1';
  [k: string]: string | number;
}

export {
  FIELD_NAME_REGEXP,
  FIELD_VALUE_MAX_LENGTH,
  Message
};
