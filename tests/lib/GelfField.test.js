import {GelfField} from "../../gelfjs/lib/GelfField";

test('create simple field', () => {
  const field = new GelfField('facility', 'example');
  expect(field.name).toEqual('facility');
  expect(field.content).toEqual('example');
});

test('create field with dynamic content', () => {
  const date = new Date().toISOString(),
    field = new GelfField('facility', () => date);
  expect(field.name).toEqual('facility');
  expect(field.content).toEqual(date);
});
