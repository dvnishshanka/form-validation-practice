// import useInput from "./../hooks/use-input";
import useInputTwo from "../hooks/use-input-two";

const BasicForm = (props) => {
  const {
    hasError: firstNameHasError,
    inputIsValid: firstNameIsValid,
    enteredInput: enteredFirstName,
    inputChangeHandler: firstNameChangeHandler,
    inputOnBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInputTwo((name) => {
    return name.trim().length !== 0;
  });

  const {
    hasError: lastNameHasError,
    inputIsValid: lastNameIsValid,
    enteredInput: enteredLastName,
    inputChangeHandler: lastNameChangeHandler,
    inputOnBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInputTwo((name) => {
    return name.trim().length !== 0;
  });

  const {
    hasError: emailHasError,
    inputIsValid: emailIsValid,
    enteredInput: enteredEmail,
    inputChangeHandler: emailChangeHandler,
    inputOnBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInputTwo((email) => {
    return email.includes("@");
  });

  let hasError = true;

  if (emailIsValid && firstNameIsValid && lastNameIsValid) {
    hasError = false;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (hasError) {
      return;
    }

    console.log("Submitted");
    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetEmail();
    resetFirstName();
    resetLastName();
  };

  const formControlFnameClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const formControlLnameClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const formControlEmailClass = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={formControlFnameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter a valid first name</p>
          )}
        </div>
        <div className={formControlLnameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter a valid last name</p>
          )}
        </div>
      </div>
      <div className={formControlEmailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={hasError}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
