import GfField from "../../gelfjs/lib/GfField";

test('create simple field', () => {
  const field = new GfField('facility', 'example');
  expect(field.name).toEqual('facility');
  expect(field.content).toEqual('example');
});

test('create field with dynamic content', () => {
  const date = new Date().toISOString();

  function fnc() {
    expect(this).toBeUndefined();
    return date;
  }

  const field = new GfField('facility', fnc);
  expect(field.name).toEqual('facility');
  expect(field.content).toEqual(date);
});
