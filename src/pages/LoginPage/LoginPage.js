import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BASE_URL } from "../../utils";
import Logo from "../assets/icons/wehyuhdeh-logo-teal.svg"
import "./LoginPage.scss";

function LoginPage() {
  const [formInputs, setFormInputs] = useState("");
  const { username, password } = formInputs
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password)

    axios.post(`${BASE_URL}/api/profile/login`, {
      username: username,
      password: password
    })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
      })
      .catch(error => console.log(error));
      navigate('/');
    };

  return (
    <div className="login">

      <header className="login-header">
        <img className="login-header__logo" src={Logo} alt="WehYuhDeh logo" />
      </header>

      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-form__header">Log In</h1>

        <div className="login-form__field">
          <label htmlFor="username" className="login-form__label">Username</label>
          <input
            type="text"
            id="username"
            onChange={(event) => setFormInputs({ ...formInputs, username: event.target.value })}
            className="login-form__input"
          />
        </div>

        <div className="login-form__field">
          <label htmlFor="password" className="login-form__label">Password</label>
          <input
            type="password"
            id="password"
            onChange={(event) => setFormInputs({ ...formInputs, password: event.target.value })}
            className="login-form__input"
          />
        </div>

        <button type="submit" className="login-form__button">LOG IN</button>
        <p>
          Need an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
