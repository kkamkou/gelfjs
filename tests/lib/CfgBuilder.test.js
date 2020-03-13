import CfgBuilder from "../../gelfjs/lib/CfgBuilder";
import AdrNull from "../../gelfjs/lib/AdrNull";

test('tbd...', () => {
  const builder = new CfgBuilder(new AdrNull()).build();
  expect(builder.adapter).toBeInstanceOf(AdrNull);
  expect(builder.fields).toHaveLength(0);
  expect(builder.filters).toHaveLength(0);
  expect(builder.transformers).toHaveLength(0);
});
