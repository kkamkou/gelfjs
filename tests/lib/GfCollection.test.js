import GfCollection from "../../gelfjs/lib/GfCollection";
import GfcField from "../../gelfjs/lib/GfcField";

test('accept constructor arguments', () => {
  const fields = [
    new GfcField('raw', 'value_raw'),
    new GfcField('cb', () => 'value_cb')
  ];
  const collection = new GfCollection(fields);

  expect(collection.toArray()).toEqual(fields);
  expect(collection.toJSON()).toEqual([{raw: 'value_raw'}, {cb: 'value_cb'}]);
});

test('be crated from a plain object', () => {
  const obj = {tom: 'cat', dogs: [{spike: 'bulldog', tyke: 'son of spike'}]};
  const collection = GfCollection.fromObject(obj);

  expect(collection.toArray()).toHaveLength(2);
  expect(collection.toJSON()).toEqual([{tom: obj['tom']}, {dogs: obj['dogs']}]);
});

test('accept more entries', () => {
  const collection = new GfCollection([]),
    field = new GfcField('name1', 'value1'),
    fields = [new GfcField('name2', 'value2'), new GfcField('name3', 'value3')];

  expect(collection.toArray()).toHaveLength(0);

  collection.add(field);
  expect(collection.toArray()).toEqual([field]);

  collection.addAll(fields);
  expect(collection.toArray()).toEqual([field, ...fields]);
});

test('preserve the state', () => {
  const field = new GfcField('name', 'value'),
    collection = new GfCollection([field]);
  expect(collection.toArray()[0]).not.toBe(field);
});
