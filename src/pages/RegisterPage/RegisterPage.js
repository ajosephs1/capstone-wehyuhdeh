import React, { useState } from "react";
import Logo from "../assets/icons/wehyuhdeh-logo-teal.svg"
import "./RegisterPage.scss";

function RegisterPage() {
  const [formInputs, setFormInputs] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formInputs)
  };

  return (
    <div className="register">

      <header className="register-header">
        <img className="register-header__logo" src={Logo} alt="WehYuhDeh logo" />
      </header>

      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="register-form__header">Sign Up</h1>
        <div className="register-form__field">
          <label htmlFor="firstName" className="register-form__label">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={(event) => setFormInputs({ ...formInputs, first_name: event.target.value })}
            className = "register-form__input"
          />
        </div>
        <div className="register-form__field">
          <label htmlFor="lastName" className="register-form__label">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={(event) => setFormInputs({ ...formInputs, last_name: event.target.value })}
            className = "register-form__input"
          />
        </div>
        <div className="register-form__field">
          <label htmlFor="username" className="register-form__label">Username</label>
          <input
            type="text"
            id="username"
            onChange={(event) => setFormInputs({ ...formInputs, username: event.target.value })}
            className = "register-form__input"
          />
        </div>
        <div className="register-form__field">
          <label htmlFor="email" className="register-form__label">Email</label>
          <input
            type="email"
            id="email"
            onChange={(event) => setFormInputs({ ...formInputs, email: event.target.value })}
            className = "register-form__input"
          />
        </div>
        <div className="register-form__field">
          <label htmlFor="password" className="register-form__label">Password</label>
          <input
            type="password"
            id="password"
            onChange={(event) => setFormInputs({ ...formInputs, password: event.target.value })}
            className = "register-form__input"
          />
        </div>
        <div className="register-form__field">
          <label htmlFor="confirmPassword" className="register-form__label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={(event) => setFormInputs({ ...formInputs, confirm_password: event.target.value })}
            className = "register-form__input"
          />
        </div>
        <button type="submit" className = "register-form__button">REGISTER</button>
      </form>
    </div>
  );
}

export default RegisterPage;
