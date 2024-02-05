import "./forgotPassword.scss";
import logo from "../../assets/amazon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

import AuthService from "../../../../services/axios/AuthService";

const ForgotPassword = () => {
  //   const apiClient = new APIClient("/reset-password");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(email);
    AuthService.forgotPassword(email)

      .then((res) => {
        // console.log(res.data);
        setMessage(res.data);
        resetMessage();
      })
      .catch((err) => console.log(err));
    setEmail("");
  };

  const resetMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="forgotContainer">
      <div className="forgotAmazonLogo">
        <img src={logo} alt="imgLogoErr" />
      </div>
      <h3 style={{ color: "green", margin: "10px 0" }}>{message}</h3>
      <div className="form">
        <h3>Password assistance</h3>
        <small>
          Enter the email address or mobile phone number associated with your
          Amazon account.
        </small>
        <span className="formItem">
          <label htmlFor="email">Email or mobile phone number</label>
          <input type="text" value={email} onChange={handleChange} />
        </span>
        <button onClick={handleclick} disabled={!email}>
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

export default ForgotPassword;
