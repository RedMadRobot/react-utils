/* eslint-disable no-magic-numbers */
/**
 * @param count - число
 * @param options - массив из трёх вариантов написания
 *
 * @example
 * 0 школ, 1 школа, 2 школы
 * getPlural(x, ['школ', 'школа', 'школы'])
 */
export const getPlural = (count: number, options: Array<string>): string => {
  if (count % 10 === 1 && count !== 11) {
    return options[1];
  } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count)) {
    return options[2];
  } else {
    return options[0];
  }
};
