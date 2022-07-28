import { useCallback, useState } from "react";
/**
 * Similiar ao useState porém com uma difereça de persistir 
 * o state no localStorage e ta,bém atualizar o mesmo sempre que o valor 
 * do state sempre que o valor do state for alterado !
 */
export default function useLocalStorage(key: string, initialValue: any = ''): any[] {
  const [state, setState] = useState(() => {
    try {
      const storageValue = localStorage.getItem(key);
      return storageValue ? JSON.parse(storageValue) : initialValue;
    } catch {
      return initialValue;
    }
  });
  const setValue = useCallback((value: any) => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, [key]);
  return [state, setValue];
}

