import {act, renderHook} from '@testing-library/react-hooks';
import {useBoolean} from './useBoolean';

describe('useBoolean', () => {
  it('should return false if no defaultValue is specified', () => {
    const hook = renderHook(() => useBoolean());

    expect(hook.result.current[0]).toBe(false);
  });

  it('should return corresponding value if defaultValue is specified', () => {
    const hook = renderHook(() => useBoolean(true));

    expect(hook.result.current[0]).toBe(true);
  });

  it('should set value to true when first function is called', () => {
    const hook = renderHook(() => useBoolean(false));

    const [, setTrue] = hook.result.current;
    act(() => {
      setTrue();
    });

    const [value] = hook.result.current;
    expect(value).toBe(true);
  });

  it('should set value to false when second function is called', () => {
    const hook = renderHook(() => useBoolean(true));

    const [,,setFalse] = hook.result.current;
    act(() => {
      setFalse();
    });

    const [value] = hook.result.current;
    expect(value).toBe(false);
  });
});
