import GelfJs from "../../gelfjs/lib/GelfJs";
import AdrNull from "../../gelfjs/lib/AdrNull";

test('create simple field', async () => {
  const smart = new GelfJs.Smart(new AdrNull());
  const result = await smart.message('test', 1, {tom: 'cat', others: {mike: 'cat', spyke: 'cat'}});
  console.log(result);
});
