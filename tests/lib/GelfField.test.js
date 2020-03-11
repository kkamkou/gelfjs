import {GelfField} from "../../gelfjs/lib/GelfField";

test('create simple field', () => {
  const field = new GelfField('facility', 'example');
  expect(field.name).toEqual('facility');
  expect(field.content).toEqual('example');
});

test('create field with dynamic content', () => {
  const date = new Date().toISOString();

  function fnc() {
    expect(this).toBeUndefined();
    return date;
  }

  const field = new GelfField('facility', fnc);
  expect(field.name).toEqual('facility');
  expect(field.content).toEqual(date);
});
