import { useCallback, useState } from "react";

export interface UseControllableStateParams<TValue> {
  value?: TValue;
  defaultValue?: TValue;
  onChange?: (value: TValue) => void;
}

export function useControllableState<TValue>({
  value,
  defaultValue,
  onChange,
}: UseControllableStateParams<TValue>) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const setValue = useCallback(
    (nextValue: TValue | ((previousValue: TValue | undefined) => TValue)) => {
      const resolvedValue =
        typeof nextValue === "function"
          ? (nextValue as (previousValue: TValue | undefined) => TValue)(currentValue)
          : nextValue;

      if (!isControlled) {
        setInternalValue(resolvedValue);
      }

      onChange?.(resolvedValue);
    },
    [currentValue, isControlled, onChange],
  );

  return [currentValue, setValue] as const;
}
