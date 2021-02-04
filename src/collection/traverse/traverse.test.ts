/* eslint-disable no-magic-numbers */
import {traverse} from '.';

const formatter = name => `new_${name}`;

test('should rename every field in nested object', () => {
  const test = {
    text: 'text',
    number: 3,
    array: [1, 2, 3],
    object: {
      text: 'text',
      number: 5,
      array: [4, 5, 6],
    },
  };

  const expected = {
    new_text: 'text',
    new_number: 3,
    new_array: [1, 2, 3],
    new_object: {
      new_text: 'text',
      new_number: 5,
      new_array: [4, 5, 6],
    },
  };

  const result = traverse(test, formatter);
  expect(result).toStrictEqual(expected);
});
