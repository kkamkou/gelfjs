import GfMessage from "../../gelfjs/lib/GfMessage";
import GfcField from "../../gelfjs/lib/GfcField";
import GfCollection from "../../gelfjs/lib/GfCollection";

test('build an empty payload by the spec', () => {
  const timestamp = Math.floor(Date.now() / 1000),
    msg = new GfMessage(new GfCollection([new GfcField('timestamp', timestamp)])),
    expected = {
      'short_message': 'No message',
      'host': 'unknown',
      'timestamp': timestamp,
      '_version': '1.1'
    };
  expect(JSON.parse(msg.toString())).toEqual(expected);
});
