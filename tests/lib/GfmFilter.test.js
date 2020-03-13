import GfField from "../../gelfjs/lib/GfField";
import GfmFilterFunction from "../../gelfjs/lib/GfmFilterFunction";

test('filter message out if it contains an invalid field', () => {
  function fnc(fields) {
    expect(this).toBeUndefined();
    return Promise.resolve(fields.findIndex(f => f.name === 'id') === -1);
  }

  const filter = new GfmFilterFunction(fnc);

  expect(filter.accept([])).resolves.toBeTruthy();
  expect(filter.accept([new GfField('id', 'example')])).resolves.toBeFalsy();
  expect(filter.accept([new GfField('field', 'test'), new GfField('id', 'example')]))
    .resolves.toBeFalsy();
  expect(
    filter.accept([new GfField('field', 'test'), new GfField('field2', 'test2')])
  ).resolves.toBeTruthy();
});
