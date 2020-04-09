import GfcField from "../dist/GfcField";
import GfCollection from "../dist/GfCollection";
import GftFieldReject from "../dist/GftFieldReject";

test('filter out invalid fields', async () => {
  const fields = [new GfcField('test field', 'value'), new GfcField('valid', 'field')],
    transform = new GftFieldReject();
  expect((await transform.transform(new GfCollection(fields))).toArray()).toEqual([fields[1]]);
});

test('filter out unnecessary fields', async () => {
  const fields = [new GfcField('example', 'value'), new GfcField('id', 'value2')],
    transform = new GftFieldReject(['id']);
  expect((await transform.transform(new GfCollection(fields))).toArray()).toEqual([fields[0]]);
});
