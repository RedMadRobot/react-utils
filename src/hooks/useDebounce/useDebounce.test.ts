import {renderHook, act} from '@testing-library/react-hooks';
import {useDebounce} from './useDebounce';

const TIMEOUT = 1000;

describe('useDebounce', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should change variable after given amount of time', () => {
    const hook = renderHook(() => useDebounce('test', TIMEOUT));

    expect(hook.result.current).toBe(undefined);
    act(() => {
      jest.advanceTimersByTime(TIMEOUT);
    });
    expect(hook.result.current).toBe('test');
  });

  it('should cancel timer on unmount', () => {
    const hook = renderHook(() => useDebounce('test', TIMEOUT));

    expect(hook.result.current).toBe(undefined);
    hook.unmount();
    act(() => {
      jest.advanceTimersByTime(TIMEOUT);
    });
    expect(hook.result.current).toBe(undefined);
  });
});
