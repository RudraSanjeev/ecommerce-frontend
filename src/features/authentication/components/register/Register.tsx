import "./register.scss";
import logo from "../../assets/amazon.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="registerContainer">
      <div className="registerAmazonLogo">
        <img src={logo} alt="imgLogoErr" />
      </div>
      <div className="form">
        <h3>Create Account</h3>
        <form>
          <span className="registerInputSpan">
            <label htmlFor="Your name">Your name</label>
            <input type="text" placeholder="first and last name" />
          </span>
          <span className="registerInputSpan">
            <label htmlFor="Mobile number">Mobile number</label>
            <span className="registerMobileInput">
              <select>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+10">+10</option>
                <option value="+11">+11</option>
                <option value="+13">+13</option>
                <option value="+15">+15</option>
              </select>
              <input type="text" placeholder="Mobile number" />
            </span>
          </span>
          <span className="registerInputSpan">
            <label htmlFor="Your email">Email</label>
            <input type="email" placeholder="Your Email" />
          </span>
          <span className="registerInputSpan">
            <label htmlFor="Your password">Password</label>
            <input type="password" placeholder="Your Password" />
          </span>
          <small>password must be atleast 6 characters</small>
          <button>Submit</button>
        </form>
        <span className="registerSignInSpan">
          Already have an account?{" "}
          <Link to="/login" className="registerLink">
            signin
          </Link>
        </span>
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

export default Register;
