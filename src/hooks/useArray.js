import { useCallback, useState } from "react";

const useArray = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  const add = useCallback((element) => {
    setValue((oldValue) => [...oldValue, element]);
  }, []);

  const removeByIndex = useCallback((index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  }, []);

  const removeById = useCallback((id) => {
    setValue((oldValue) => oldValue.filter((_, i) => _.id !== id));
  }, []);

  const clear = useCallback(() => {
    setValue(() => []);
  }, []);

  const isEmpty = () => value.length === 0;

  return { value, setValue, add, removeByIndex, removeById, clear, isEmpty };
};

export default useArray;
