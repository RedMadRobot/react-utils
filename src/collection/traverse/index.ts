import keys from 'lodash/keys';
import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';

export type Formatter = (text: string) => string;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const traverse = <T>(item: T, formatter: Formatter): any => {
  if (isPlainObject(item)) {
    return keys(item).reduce((acc: Record<string, unknown>, current: string) => {
      const newName = formatter(current);

      if (isPlainObject(item[current]) || isArray(item[current])) {
        acc[newName] = traverse<T>(item[current], formatter);
      } else {
        acc[newName] = item[current];
      }

      return acc;
    }, {});
  } else if (item instanceof Array) {
    return item.map((item: T) => traverse<T>(item, formatter));
  } else {
    return item;
  }
};
