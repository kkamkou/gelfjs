import GfcField from "../dist/GfcField";
import GfCollection from "../dist/GfCollection";
import GftFieldError from "../dist/GftFieldError";

test('interpret an error', () => {
  const error = new Error('example'),
    fields = [new GfcField('err', error)],
    transform = new GftFieldError();
  expect(transform.transform(new GfCollection(fields)).toJSON())
    .toEqual([{err: {message: error.message, stack: error.stack}}]);
});
