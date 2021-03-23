import {useState, useCallback} from 'react';

type ReturnType = [
  boolean,
  () => void,
  () => void,
];

export function useBoolean(defaultValue: boolean = false): ReturnType {
  const [value, setValue] = useState(defaultValue);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [
    value,
    setTrue,
    setFalse,
  ];
}
