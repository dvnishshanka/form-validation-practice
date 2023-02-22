import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [inputNameIsTouched, setInputNameIsTouched] = useState(false);
  const [inputEmailIsTouched, setInputEmailIsTouched] = useState(false);

  const nameIsValid = enteredName.trim().length !== 0;
  const enteredNameIsInvalid = inputNameIsTouched && !nameIsValid;

  const emailIsValid = enteredEmail.trim().includes("@");
  const enteredEmailIsInvalid = inputEmailIsTouched && !emailIsValid;

  let formIsValid = false;

  if (emailIsValid && nameIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setInputNameIsTouched(true);
    setInputEmailIsTouched(true);

    if (!formIsValid) {
      return;
    }
    setInputNameIsTouched(false);
    setEnteredName("");

    setEnteredEmail("");
    setInputEmailIsTouched(false);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameOnBlurHandler = () => {
    setInputNameIsTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailOnBlurHandler = () => {
    setInputEmailIsTouched(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameOnBlurHandler}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Please enter a valid name</p>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
