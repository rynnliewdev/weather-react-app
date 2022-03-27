import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key) || String(initialValue));
    } catch (error) {
      val = initialValue;
    }
    return val;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
