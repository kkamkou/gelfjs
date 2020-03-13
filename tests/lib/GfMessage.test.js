import GfMessage from "../../gelfjs/lib/GfMessage";
import GfField from "../../gelfjs/lib/GfField";

test('build an empty payload by the spec', () => {
  const timestamp = Math.floor(Date.now() / 1000),
    msg = new GfMessage([new GfField('timestamp', timestamp)]),
    expected = {
      'short_message': 'No message',
      'host': 'unknown',
      'timestamp': timestamp,
      '_version': '1.1'
    };
  expect(JSON.parse(msg.toString())).toEqual(expected);
});
