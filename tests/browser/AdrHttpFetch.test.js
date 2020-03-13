import AdrHttpFetch from "../../gelfjs/browser/AdrHttpFetch";
import GfMessage from "../../gelfjs/lib/GfMessage";

test('tbd...', () => {
  const adapter = new AdrHttpFetch();
  expect(adapter.send(new GfMessage())).resolves.toEqual(undefined);
});
