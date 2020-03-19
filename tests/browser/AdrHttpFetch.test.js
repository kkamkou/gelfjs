import AdrHttpFetch from "../../gelfjs/browser/AdrHttpFetch";
import GfMessage from "../../gelfjs/lib/GfMessage";
import GelfJs from "../../gelfjs/lib/GelfJs";

xtest('asd', async () => {
  const gelfjs = new GelfJs.Smart(new AdrHttpFetch.Smart("http://xx/gelf")),
    extra = {tom: 'cat', dogs: {spike: 'bulldog', tyke: 'son of spike'}};
  await gelfjs.warn('a new message', extra);
});
