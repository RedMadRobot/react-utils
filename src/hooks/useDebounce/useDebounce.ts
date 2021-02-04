import {
  useState,
  useEffect,
} from 'react';

/**
 * @using
 * ```
 * const [value, setValue] = useState('');
 * const debouncedValue = useDebounce(value, 500);
 *
 * useEffect(() => {
 *  fetchQuery(debouncedValue)
 * }, [debouncedValue])
 * ```
 * @param value - value that should be debounced
 * @param delay - number of milliseconds
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
