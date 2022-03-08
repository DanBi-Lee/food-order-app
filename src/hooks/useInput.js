import { useState } from "react";

function useInput(validation, initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validation(value);
  const hasError = !isValid && isTouched;

  function onChange(e) {
    setValue(e.target.value);
  }

  function onBlur() {
    setIsTouched(true);
  }

  function reset() {
    setValue(initialValue);
    setIsTouched(false);
  }

  return {
    value,
    isValid,
    hasError,
    onChange,
    onBlur,
    reset,
  };
}

export default useInput;
