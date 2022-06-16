import { useState } from 'react';

function usePersist<T>(argKey: string, initVal: T): [T, (val: T) => void] {
  const key = 'hooks:' + argKey;
  const value = (): T => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initVal;
    } catch (err) {
      console.log(err);
      return initVal;
    }
  };

  const setValue = (val: T): void => {
    try {
      setSavedValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (err) {
      console.log(err);
    }
  };

  const [savedValue, setSavedValue] = useState<T>(value);

  return [savedValue, setValue];
}

export default usePersist;
