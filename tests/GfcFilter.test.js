import GfcField from "../gelfjs/GfcField";
import GfcFilterFunction from "../gelfjs/GfcFilterFunction";
import GfCollection from "../gelfjs/GfCollection";

test('filter message out if it contains an invalid field', () => {
  function fnc(collection) {
    expect(this).toBeUndefined();
    return Promise.resolve(collection.toArray().findIndex(f => f.name === 'id') === -1);
  }

  const filter = new GfcFilterFunction(fnc);

  expect(filter.accept(new GfCollection([]))).resolves.toBeTruthy();
  expect(filter.accept(new GfCollection([new GfcField('id', 'example')]))).resolves.toBeFalsy();
  expect(
    filter.accept(new GfCollection([new GfcField('field', 'test'), new GfcField('id', 'example')]))
  ).resolves.toBeFalsy();
  expect(
    filter.accept(
      new GfCollection([new GfcField('field', 'test'), new GfcField('field2', 'test2')])
    )
  ).resolves.toBeTruthy();
});
