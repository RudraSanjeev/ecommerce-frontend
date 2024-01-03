import "./login.scss";
import logo from "../../assets/amazon.png";

import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [isEmail, setEmail] = useState<string>("");
  const [hidePassword, setHidePassword] = useState(false);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <div className="registerContainer">
      <div className="registerAmazonLogo">
        <img src={logo} alt="imgLogoErr" />
      </div>
      <div className="form">
        <h3>Sign in</h3>
        {isEmail && hidePassword && (
          <p className="loginchangeEmail">
            {isEmail}
            <button
              className="loginButton"
              onClick={(e) => {
                e.preventDefault();
                setHidePassword(!hidePassword);
              }}
            >
              change?
            </button>
          </p>
        )}
        <form>
          {!hidePassword && (
            <span className="registerInputSpan">
              <label htmlFor="Email or mobile phone number">
                Email or mobile phone number
              </label>
              <input type="email" onChange={handleEmail} value={isEmail} />
            </span>
          )}
          {hidePassword && (
            <span className="registerInputSpan">
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <label htmlFor="Your password">Password</label>
                <Link
                  to="/"
                  className="loginLinks"
                  style={{ fontSize: "small" }}
                >
                  Forgot
                </Link>
              </span>
              <input type="password" placeholder="Your Password" />
            </span>
          )}
          <small>password must be atleast 6 characters</small>
          {!hidePassword && (
            <button
              disabled={!isEmail.includes("@")}
              onClick={(e) => {
                e.preventDefault();
                setHidePassword(!hidePassword);
              }}
            >
              Continue
            </button>
          )}

          {hidePassword && <button onClick={handleLogin}>sign In</button>}
        </form>
        <small>
          By continuing, you agree to Amazon's{" "}
          <Link to="/" className="loginLinks">
            Conditions of Use
          </Link>{" "}
          and{" "}
          <Link to="/" className="loginLinks">
            Privacy Notice.
          </Link>
        </small>
      </div>
      <div className="newToAmazon">
        <span className="HR"></span>
        <span className="newToAmazonText">New to Amazon?</span>
        <Link to="/register" className="loginCreateNewAccountButton">
          Create Your Amazon Account
        </Link>
      </div>
      <div className="loginFooterTagContainer">
        <div className="loginFotterTaglLinksContainer">
          <Link to="#" className="loginFooterLinks">
            Conditions of Use
          </Link>
          <Link to="#" className="loginFooterLinks">
            Privacy Notice
          </Link>
          <Link to="#" className="loginFooterLinks">
            Help
          </Link>
        </div>
        <div className="loginFooterTagText">
          <span>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
