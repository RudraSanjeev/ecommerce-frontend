import "./login.scss";
import logo from "../../assets/amazon.png";
import AuthService, {
  LoginEntity,
} from "../../../../services/axios/AuthService";

import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateLogin } from "../../../../redux/userSlice";
import { updateCart } from "../../../../redux/cartSlice";
import { setCurrentAddress } from "../../../../redux/addressSlice";
import APIClient from "../../../../services/axios/apiClient";
// import { AddressEntity } from "../../../Accounts/components/singleAddress/SingleAddress";
const Login = () => {
  const apiClient = new APIClient("/carts");
  const apiClient2 = new APIClient("/address/current");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [hidePassword, setHidePassword] = useState(false);
  const [message, setMessage] = useState<any>("");
  // const [token, setToken] = useState<string | null>(null);

  const [loginData, setLoginData] = useState<LoginEntity>({
    email: "",
    password: "",
  });
  // const [currAddress, setCurrAddress] = useState<AddressEntity>({
  //   _id: "",
  //   fullName: "",
  //   houseNo: "",
  //   landmark: "",
  //   city: "",
  //   state: "",
  //   pincode: "",
  //   country: "",
  //   mobileNumber: "",
  // });

  useEffect(() => {
    AuthService.getToken() &&
      apiClient
        .getAllCarts({
          headers: {
            token: `Bearer ${AuthService.getToken()}`,
          },
        })
        .then((res) => {
          // console.log(res);

          dispatch(
            updateCart({
              cartItems: res.items,
              totalPrice: res.totalPrice,
            })
          );
        });
  }, [AuthService.getToken()]);

  // useEffect(() => {
  //   AuthService.getToken() &&
  //     apiClient2
  //       .getCurrentAddress()
  //       .then((res: any) => {
  //         // setCurrAddress(res);
  //         console.log(res);
  //         dispatch(setCurrentAddress({ currentAddress: res }));
  //       })
  //       .catch((err) => console.log(err));
  // }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // console.log(loginData);
    AuthService.login(loginData)
      .then((res) => {
        // setMessage(res);
        // console.log("username " + res.username, "token: " + res.token);
        // const firstName = res.username.slice(" ")[0];
        // console.log(firstName);
        dispatch(
          updateLogin({
            fullName: res.username,
            token: res.token,
          })
        );

        apiClient2
          .getCurrentAddress()
          .then((addressRes: any) => {
            // console.log(addressRes);
            dispatch(setCurrentAddress({ ...addressRes }));
          })
          .catch((err) => console.log(err));
      })
      .catch((error: AxiosError) => {
        console.log("error: " + error.response?.data);
        setMessage(error.response?.data);
      })
      .finally(() => {
        if (AuthService.getToken()) {
          nav("/");
        }
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
        <h3>Sign in</h3>
        {loginData.email && hidePassword && (
          <p className="loginchangeEmail">
            {loginData.email}
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
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
            </span>
          )}
          {hidePassword && (
            <span className="registerInputSpan">
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <label htmlFor="Your password">Password </label>
                <Link
                  to="/"
                  className="loginLinks"
                  style={{ fontSize: "small" }}
                >
                  Forgot
                </Link>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                onChange={handleChange}
              />
              {message && (
                <span
                  style={{
                    margin: "10px 0",
                    color: "red",
                    fontSize: "medium",
                    textAlign: "center",
                  }}
                >
                  {message}
                </span>
              )}
            </span>
          )}
          {hidePassword && <small>password must be atleast 6 characters</small>}
          {!hidePassword && (
            <button
              disabled={!loginData.email.includes("@")}
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
