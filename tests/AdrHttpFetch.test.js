import AdrHttpFetch from "../gelfjs/AdrHttpFetch";
import GfMessage from "../gelfjs/GfMessage";
import GelfJs from "../gelfjs/GelfJs";

xtest('asd', async () => {
  const gelfjs = new GelfJs.Smart(new AdrHttpFetch.Smart("http://xxx/gelf")),
    extra = {tom: 'cat', dogs: {spike: 'bulldog', tyke: 'son of spike'}};
  //await gelfjs.warn('a new message', extra);
});
