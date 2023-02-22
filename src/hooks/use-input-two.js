import { useReducer } from "react";

const inputReducer = (state, action) => {
  if (action.type === "INPUT_ON_BLUR") {
    return { isTouched: true, value: state.value };
  } else if (action.type === "INPUT_ON_CHANGE") {
    return { isTouched: state.isTouched, value: action.value };
  } else if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
};

const useInputTwo = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
  });

  const inputIsValid = validateValue(inputState.value);
  const hasError = inputState.isTouched && !inputIsValid;

  const inputOnBlurHandler = () => {
    dispatchInput({ type: "INPUT_ON_BLUR" });
  };

  const inputChangeHandler = (event) => {
    dispatchInput({ type: "INPUT_ON_CHANGE", value: event.target.value });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    hasError,
    enteredInput: inputState.value,
    reset,
    inputChangeHandler,
    inputOnBlurHandler,
    inputIsValid,
  };
};

export default useInputTwo;
