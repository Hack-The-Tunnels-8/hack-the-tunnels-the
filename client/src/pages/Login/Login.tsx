import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();
  let username, password

  const attemptLogin = async () => {
    try {
      const message = await login(username, password);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <input type="text" id="email" name="email" onChange={() => {username = this.value}}></input>
        <input type="text" id="password" name="password" onChange={() => {password = this.value}}></input>
        <button onClick={() => attemptLogin()}>
          Login
        </button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default Login;
