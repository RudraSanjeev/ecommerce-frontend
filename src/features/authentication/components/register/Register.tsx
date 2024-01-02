import "./register.scss";
import logo from "../../assets/amazon.png";
const Register = () => {
  return (
    <div className="registerContainer">
      <div className="registerAmazonLogo">
        <img src={logo} alt="imgLogoErr" />
      </div>
      <div className="form">
        <h3>Create Account</h3>
        <form>
          <label htmlFor="Your name">Your name</label>
          <input type="text" placeholder="first and last name" />
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
          <label htmlFor="Your email">Email</label>
          <input type="email" placeholder="Your Email" />
          <label htmlFor="Your password">Password</label>
          <input type="password" placeholder="Your Password" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
