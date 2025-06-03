import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";
import dropArrow from "../../assets/svg/drop-arrow-icon.svg";
import "./NavBar.scss";

const NavBar = () => {
  const location = useLocation();
  const navRef = useRef();
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="nav" ref={navRef}>
      <ul className="nav__list">
        <li className="nav__item" onClick={() => toggleDropdown("commercial")}>
          <div className="nav__item-container">
            Commercial Services
            <img
              className="nav__item-icon"
              src={dropArrow}
              alt="drop-arrow-icon"
            />
          </div>
          {openDropdown === "commercial" && (
            <ul className="nav__dropdown">
              <li className="nav__dropdown-item">
                <Link to="/commercial-lawn-care">Lawn Care</Link>
              </li>
              <li className="nav__dropdown-item">
                <Link to="/commercial-landscaping-design">
                  Landscaping Design
                </Link>
              </li>
              <li className="nav__dropdown-item">
                <Link to="/commercial-property-renovation">
                  Property Renovation
                </Link>
              </li>
              <li className="nav__dropdown-item">
                <Link to="/commercial-snow-removal">Snow Removal</Link>
              </li>
              <li className="nav__dropdown-item">
                <Link to="/commercial-seasonal-maintenance">
                  Seasonal Maintenance
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="nav__item" onClick={() => toggleDropdown("residential")}>
          <div className="nav__item-container">
            Residential Services
            <img
              className="nav__item-icon"
              src={dropArrow}
              alt="drop-arrow-icon"
            />
          </div>
          {openDropdown === "residential" && (
            <ul className="nav__dropdown">
              <li className="nav__dropdown-item">
                <Link to="/residential-lawn-care">Lawn Mowing</Link>
              </li>

              <li className="nav__dropdown-item">
                <Link to="/residential-spring-cleanup">
                  Spring Yard Cleanup
                </Link>
              </li>
              <li className="nav__dropdown-item">
                <Link to="/residential-fall-cleanup">Fall Yard Cleanup</Link>
              </li>
              <li className="nav__dropdown-item">
                <Link to="/residential-landscaping-design">
                  Landscaping Design
                </Link>
              </li>
              <li className="nav__dropdown-item">
                <Link to="/residential-property-renovation">
                  Property Renovation
                </Link>
              </li>
              <li className="nav__dropdown-item">
                <Link to="/residential-snow-removal">Snow Removal</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="nav__item" onClick={() => toggleDropdown("company")}>
          <div className="nav__item-container">
            Company
            <img
              className="nav__item-icon"
              src={dropArrow}
              alt="drop-arrow-icon"
            />
          </div>
          {openDropdown === "company" && (
            <ul className="nav__dropdown">
              <li className="nav__dropdown-item">
                <Link to="/about">About Us</Link>
              </li>
              <li className="nav__dropdown-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
