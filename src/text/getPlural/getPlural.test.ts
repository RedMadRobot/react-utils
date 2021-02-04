/* eslint-disable no-magic-numbers */
import {getPlural} from '.';

const options = ['школ', 'школа', 'школы'];

test('get plural form for 0 entities', () => {
  expect(getPlural(0, options)).toBe('школ');
});

test('get plural form for 1 entity', () => {
  expect(getPlural(1, options)).toBe('школа');
});

test('get plural form for 2 entities', () => {
  expect(getPlural(2, options)).toBe('школы');
});

test('get plural form for 11 entities', () => {
  expect(getPlural(11, options)).toBe('школ');
});
