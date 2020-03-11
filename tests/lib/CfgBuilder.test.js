import { CfgBuilder } from "../../gelfjs/lib/CfgBuilder";

test('adds 1 + 2 to equal 3', () => {
  const builder = new CfgBuilder();
  expect(builder.build()).toBe(3);
});
