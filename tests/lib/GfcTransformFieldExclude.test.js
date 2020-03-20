import GfcField from "../../gelfjs/lib/GfcField";
import GfCollection from "../../gelfjs/lib/GfCollection";
import GfcTransformFieldExclude from "../../gelfjs/lib/GfcTransformFieldExclude";

test('throw in case on an empty constructor', () => {
  expect(() => new GfcTransformFieldExclude([])).toThrow(Error);
});

test('filter out unnecessary fields', async () => {
  const fields = [new GfcField('example', 'value'), new GfcField('id', 'value2')],
    transform = new GfcTransformFieldExclude(['id']),
    collection = new GfCollection(fields);
  expect((await transform.transform(collection)).toArray()).toEqual([fields[0]]);
});
