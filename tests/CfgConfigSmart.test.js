import AdrNull from "../dist/AdrNull";
import CfgConfigSmart from "../dist/CfgConfigSmart";

test('provide default presets', () => {
  const config = new CfgConfigSmart(new AdrNull()).build();
  expect(config.adapter()).toBeInstanceOf(AdrNull);
  expect(config.fields()).toHaveLength(0);
  expect(config.filters()).toHaveLength(0);
  expect(config.transformers()).toHaveLength(2);
});
