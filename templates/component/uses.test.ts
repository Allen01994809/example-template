import { useCounter } from './uses'
import { renderHook, act } from "@testing-library/react";

describe('TemplateName hooks test', () => {
  test('example', () => {
    const hook = renderHook(() => useCounter(1));
    expect(hook.result.current.count).toBe(1);

    // hooksのステート変更を伴うイベント
    act(() => hook.result.current.increment());
    expect(hook.result.current.count).toBe(2);
  });
});
