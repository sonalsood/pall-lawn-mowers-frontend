import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/svg/right-arrow-icon.svg";
import "./Menu.scss";

const Menu = ({ isMenuPanelOpen }) => {
  return (
    <section className="menu">
      <div className="menu__card">
        <div className="menu__group">
          <h3 className="menu__heading">Commercial Services</h3>
          <ul>
            <li className="menu__item">
              <Link to="/commercial-lawn-care">
                <div className="menu__item-container">
                  Lawn Care
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/commercial-yard-cleanup">
                <div className="menu__item-container">
                  Spring Yard Cleanup
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/commercial-yard-cleanup">
                <div className="menu__item-container">
                  Fall Yard Cleanup
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/commercial-lanscaping-design">
                <div className="menu__item-container">
                  Landscaping Design
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/commercial-property-renovation">
                <div className="menu__item-container">
                  Property Renovation
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/commercial-snow-removal">
                <div className="menu__item-container">
                  Snow Removal
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/commercial-seasonal-maintenance">
                <div className="menu__item-container">
                  Seasonal Maintenance
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="menu__group">
          <h3 className="menu__heading">Residential Services</h3>
          <ul>
            <li className="menu__item">
              <Link to="/residential-lawn-care">
                <div className="menu__item-container">
                  Lawn Mowing
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/residential-yard-cleanup">
                <div className="menu__item-container">
                  Spring Yard Cleanup
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/residential-yard-cleanup">
                <div className="menu__item-container">
                  Fall Yard Cleanup
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/residential-lanscaping-design">
                <div className="menu__item-container">
                  Landscaping Design
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/residential-property-renovation">
                <div className="menu__item-container">
                  Property Renovation
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/residential-snow-removal">
                <div className="menu__item-container">
                  Snow Removal
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/residential-seasonal-maintenance">
                <div className="menu__item-container">
                  Seasonal Maintenance
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="menu__group">
          <h3 className="menu__heading">Company</h3>
          <ul>
            <li className="menu__item">
              <Link to="/about">
                <div className="menu__item-container">
                  About Us
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/contact">
                <div className="menu__item-container">
                  Contact
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
            <li className="menu__item">
              <Link to="/faq">
                <div className="menu__item-container">
                  FAQ
                  <img
                    className="menu__item-icon"
                    src={arrow}
                    alt="right-arrow-icon"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
