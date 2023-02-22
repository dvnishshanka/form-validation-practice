import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validateValue(enteredInput);
  const hasError = inputIsTouched && !inputIsValid;

  const inputOnBlurHandler = () => {
    setInputIsTouched(true);
  };

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  const reset = () => {
    setEnteredInput("");
    setInputIsTouched(false);
  };

  return {
    hasError,
    enteredInput,
    reset,
    inputChangeHandler,
    inputOnBlurHandler,
    inputIsValid,
  };
};

export default useInput;
