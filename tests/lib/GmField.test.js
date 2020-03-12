import GmField from "../../gelfjs/lib/GmField";

test('create simple field', () => {
  const field = new GmField('facility', 'example');
  expect(field.name).toEqual('facility');
  expect(field.content).toEqual('example');
});

test('create field with dynamic content', () => {
  const date = new Date().toISOString();

  function fnc() {
    expect(this).toBeUndefined();
    return date;
  }

  const field = new GmField('facility', fnc);
  expect(field.name).toEqual('facility');
  expect(field.content).toEqual(date);
});
