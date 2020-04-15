import "isomorphic-fetch"

import AdrHttpFetch from "../dist/AdrHttpFetch";
import GelfJs from "../dist/GelfJs";
import GfMessage from "../dist/GfMessage";


test('init and destroy return an empty promise', async () => {
  const adapter = new AdrHttpFetch('http://noname.com');
  await expect(adapter.init()).resolves.not.toThrow();
  await expect(adapter.destroy()).resolves.not.toThrow();
});

test('generate valid request object', () => {
  const adapter = new AdrHttpFetch('http://noname.com'),
    msg = new GfMessage(),
    mock = jest.fn(),
    matcher = expect.objectContaining({
      body: msg.toString(),
      headers: {_headers: {'content-type': ["application/json"]}},
      method: 'post',
      url: 'http://noname.com'
    });

  jest.spyOn(adapter, '_fetch').mockImplementation(() => mock);
  adapter.send(msg);

  expect(mock).toBeCalledWith(matcher)
});

xtest('asd', async () => {
  const gelfjs = new GelfJs(new AdrHttpFetch("http://xxx/gelf")),
    extra = {tom: 'cat', dogs: {spike: 'bulldog', tyke: 'son of spike'}};
  await gelfjs.warn('a new message', extra);
});
