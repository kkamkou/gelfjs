import GfMessage from "../gelfjs/GfMessage";
import GfcField from "../gelfjs/GfcField";
import GfCollection from "../gelfjs/GfCollection";

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

test('throw if key is forbidden', () => {
  const msg = new GfMessage(new GfCollection([new GfcField('id', 'value')]));
  expect(() => msg.toString()).toThrowError(`The "id" field isn't allowed by the specification`);
});

test('throw if key name is not valid according the spec', () => {
  const msg = new GfMessage(new GfCollection([new GfcField('extra', {'example%string': 'test'})]));
  expect(() => msg.toString()).toThrowError(`Key format is not valid (example%string)`);
});

test('throw in case of nested arrays', () => {
  const msg = new GfMessage(new GfCollection([new GfcField('extra', [{'field': 'value'}])]));
  expect(() => msg.toString()).toThrowError(`Array extraction will spoil your elasticsearch index`);
});
