import { useCallback, useState } from "react";

function useStorage(key: string, initialValue:string ='') {
  const [state, setState] = useState(() => {
    try {
      const storageValue = localStorage.getItem(key);
      return storageValue ? JSON.parse(storageValue) : initialValue;
    } catch {
      return initialValue;
    }
  });
  const setValue = useCallback((value) => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, [key]);
  return [state, setValue];
}
