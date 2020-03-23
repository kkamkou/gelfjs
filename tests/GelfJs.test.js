import GelfJs from "../dist/GelfJs";
import AdrNull from "../dist/AdrNull";

xtest('create simple field', async () => {
  const smart = new GelfJs(new AdrNull());
  const extra = {tom: 'cat', dogs: [{spike: 'bulldog', tyke: 'son of spike'}]};
  smart.log("asdsd");
  const result = await smart.message('test', 1, extra);
  //console.log(result);
});
