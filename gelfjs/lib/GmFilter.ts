/**
 * Licensed under the MIT License.
 *
 * @author  Kanstantsin Kamkou (2ka.by)
 * @link    https://github.com/kkamkou/gelfjs
 * @license https://opensource.org/licenses/MIT
 */

export default class GmFilter {
  constructor(
    private readonly fnc: (msg: string) => boolean
  ) {}

  filter(msg: string): boolean {
    return (this.fnc as Function).call(undefined, msg);
  }
}
