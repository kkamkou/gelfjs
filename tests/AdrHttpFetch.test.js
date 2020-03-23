import AdrHttpFetch from "../dist/AdrHttpFetch";
import GfMessage from "../dist/GfMessage";
import GelfJs from "../dist/GelfJs";

import "isomorphic-fetch"

xtest('asd', async () => {
  const gelfjs = new GelfJs(new AdrHttpFetch("http://xxx/gelf")),
    extra = {tom: 'cat', dogs: {spike: 'bulldog', tyke: 'son of spike'}};
  await gelfjs.warn('a new message', extra);
});
