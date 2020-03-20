import GelfJs from "../gelfjs/GelfJs";
import AdrNull from "../gelfjs/AdrNull";

test('create simple field', async () => {
  const smart = new GelfJs.Smart(new AdrNull());
  const extra = {tom: 'cat', dogs: [{spike: 'bulldog', tyke: 'son of spike'}]};
  smart.log("asdsd");
  const result = await smart.message('test', 1, extra);
  //console.log(result);
});
