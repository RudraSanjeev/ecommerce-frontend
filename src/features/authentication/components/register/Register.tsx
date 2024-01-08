import "./register.scss";
import logo from "../../assets/amazon.png";
import { Link } from "react-router-dom";
import AuthService from "../../../../services/axios/AuthService";
import { RegisterEntity } from "../../../../services/axios/AuthService";
import { useState } from "react";
import { AxiosError } from "axios";

const Register = () => {
  const [formData, setFormData] = useState<RegisterEntity>({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(formData);
    AuthService.register(formData)
      .then((res) => {
        setMessage(res);
      })
      .catch((error: AxiosError) => {
        console.log(error.response?.data);
        setMessage(error.message);
      });

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

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
            <input
              type="text"
              placeholder="first and last name"
              name="fullName"
              onChange={handleChange}
            />
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
              <input
                type="text"
                placeholder="Mobile number"
                name="phoneNumber"
                onChange={handleChange}
              />
            </span>
          </span>
          <span className="registerInputSpan">
            <label htmlFor="Your email">Email</label>

            <input
              type="email"
              placeholder="Your Email"
              name="email"
              onChange={handleChange}
            />
          </span>
          <span className="registerInputSpan">
            <label htmlFor="Your password">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              name="password"
              onChange={handleChange}
            />
          </span>
          <small>password must be atleast 6 characters</small>
          <button onClick={handleRegister}>Submit</button>
        </form>
        <span className="registerSignInSpan">
          Already have an account?{" "}
          <Link to="/login" className="registerLink">
            signin
          </Link>
        </span>
        {message && (
          <span
            style={{
              margin: "10px 0",
              color: "red",
              fontSize: "medium",
              textAlign: "center",
            }}
          >
            something went wrong
          </span>
        )}
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
