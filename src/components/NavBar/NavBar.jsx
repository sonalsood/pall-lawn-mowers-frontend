import { Link, useLocation } from "react-router-dom";
import dropArrow from "../../assets/svg/drop-arrow-icon.svg";
import "./NavBar.scss";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <div className="nav__item-container">
            Commercial Services
            <img
              className="nav__item-icon"
              src={dropArrow}
              alt="drop-arrow-icon"
            />
          </div>
        </li>
        <li className="nav__item">
          <div className="nav__item-container">
            Residential Services
            <img
              className="nav__item-icon"
              src={dropArrow}
              alt="drop-arrow-icon"
            />
          </div>
        </li>

        <li className="nav__item">
          <div className="nav__item-container">
            Company
            <img
              className="nav__item-icon"
              src={dropArrow}
              alt="drop-arrow-icon"
            />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
