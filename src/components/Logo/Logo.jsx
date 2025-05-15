import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Logo.scss";

const Logo = () => {
  return (
    <>
      <Link to="/" className="logo-link">
        {/* <h1 className="logo">Pall Mowers</h1> */}
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </>
  );
};

export default Logo;
