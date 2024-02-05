import "./updatePassword.scss";
import logo from "../../assets/amazon.png";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import AuthService from "../../../../services/axios/AuthService";

const UpdatePassword = () => {
  //   const apiClient = new APIClient("/reset-password");
  //   const {token} = useParams<string>();
  const { token } = useParams<string>();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (token) {
      AuthService.updatePassword(password, token)
        .then((res) => {
          // console.log(res.data)
          setMessage(res.data);
          resetMessage();
          setPassword("");
          setConfirmPassword("");
        })
        .catch((err) => {
          setError(err.response.data.error);
          resetError();
          console.log(err.response.data.error);
        });
    }
    console.log(token);
  };

  const resetMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  const resetError = () => {
    setTimeout(() => {
      setError("");
    }, 3000);
  };

  return (
    <div className="forgotContainer">
      <div className="forgotAmazonLogo">
        <img src={logo} alt="imgLogoErr" />
      </div>
      <h3 style={{ color: "green", margin: "10px 0" }}>{message}</h3>
      <div className="form">
        <h3>Password Reset</h3>

        <span className="formItem">
          <label htmlFor="email">Enter Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </span>
        <span className="formItem">
          <label htmlFor="email">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </span>
        <small
          style={{
            color: "red",
            fontWeight: "500",
            textTransform: "capitalize",
          }}
        >
          {error}
        </small>
        <button
          onClick={handleclick}
          disabled={password !== confirmPassword || !password}
        >
          Continue
        </button>
      </div>
      <div className="forgotPasswordDescription">
        <h3>Has your email address or mobile phone number changed?</h3>
        <span>
          If you no longer use the e-mail address associated with your Amazon
          account, you may contact
          <Link to="#" className="loginLinks">
            Customer Service
          </Link>
          for help restoring access to your account.
        </span>
      </div>

      <div className="forgotFooterTagContainer">
        <div className="forgotFooterTaglLinksContainer">
          <Link to="#" className="forgotFooterLinks">
            Conditions of Use
          </Link>
          <Link to="#" className="forgotFooterLinks">
            Privacy Notice
          </Link>
          <Link to="#" className="forgotFooterLinks">
            Help
          </Link>
        </div>
        <div className="forgotFooterTagText">
          <span>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
