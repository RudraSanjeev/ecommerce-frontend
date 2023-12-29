import "./footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footerContainer">
      <p className="backToTop">Back to top</p>
      <div className="footerGridContainer">
        <div className="footerGrid">
          <div className="footerGridItems">
            <h3>Get to Know Us</h3>
            <Link to="#" className="link">
              <span>About Us</span>
            </Link>
            <Link to="#" className="link">
              <span>Careers</span>
            </Link>
            <Link to="#" className="link">
              <span>Press Release</span>
            </Link>
            <Link to="#" className="link">
              <span>Amazon Science</span>
            </Link>
          </div>
          <div className="footerGridItems">
            <h3>Connect with Us</h3>
            <Link to="#" className="link">
              <span>Facebook</span>
            </Link>
            <Link to="#" className="link">
              <span>Twitter</span>
            </Link>
            <Link to="#" className="link">
              <span>Instagram</span>
            </Link>
            <Link to="#" className="link">
              <span>Amazon Science</span>
            </Link>
          </div>
          <div className="footerGridItems">
            <h3>Make Money with Us</h3>

            <Link to="#" className="link">
              <span> Sell on Amazon</span>
            </Link>
            <Link to="#" className="link">
              <span>Sell under Amazon Accelerator</span>
            </Link>
            <Link to="#" className="link">
              <span>Protect and Build Your Brand</span>
            </Link>
            <Link to="#" className="link">
              <span>Amazon Global Selling</span>
            </Link>
            <Link to="#" className="link">
              <span>Fulfilment by Amazon</span>
            </Link>

            <Link to="#" className="link">
              <span>Become an Affiliate</span>
            </Link>
            <Link to="#" className="link">
              <span>Advertise Your Products</span>
            </Link>
            <Link to="#" className="link"></Link>
          </div>
          <div className="footerGridItems">
            <h3>Let Us Help You</h3>
            <Link to="#" className="link">
              <span>COVID-19 and Amazon</span>
            </Link>
            <Link to="#" className="link">
              <span>Your Account</span>
            </Link>
            <Link to="#" className="link">
              <span>100% Purchase Protection</span>
            </Link>
            <Link to="#" className="link">
              <span>Amazon App Download Help</span>
            </Link>
            <Link to="#" className="link">
              <span> Returns Centre</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
