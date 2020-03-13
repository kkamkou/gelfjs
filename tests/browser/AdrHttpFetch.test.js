import AdrHttpFetch from "../../gelfjs/browser/AdrHttpFetch";
import GfMessage from "../../gelfjs/lib/GfMessage";

/*test('tbd', () => {
  new AdrHttpFetch.Smart("http://10.89.2.10:12201/gelf");
  const adapter = new AdrHttpFetch();
  expect(adapter.send(new GfMessage())).resolves.toEqual(undefined);
});*/

test('asd', async () => {
  const adapter = new AdrHttpFetch.Smart("http://10.89.2.10:12201/gelf");
  console.log(await adapter.send(new GfMessage()));
  //expect(adapter.send(new GfMessage())).resolves.toEqual(undefined);
});
