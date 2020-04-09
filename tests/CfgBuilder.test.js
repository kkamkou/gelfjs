import CfgBuilder from "../dist/CfgBuilder";
import AdrNull from "../dist/AdrNull";

test('provide default presets', () => {
  const config = new CfgBuilder(new AdrNull()).build();
  expect(config.adapter()).toBeInstanceOf(AdrNull);
  expect(config.fields()).toHaveLength(0);
  expect(config.filters()).toHaveLength(0);
  expect(config.transformers()).toHaveLength(2);
});
