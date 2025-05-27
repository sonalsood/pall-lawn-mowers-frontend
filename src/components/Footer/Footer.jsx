import "./Footer.scss";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <Logo />
      </div>
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__heading">Services</h3>
          <ul className="footer__list">
            <li className="footer__item">Lawn Mowing</li>
            <li className="footer__item">Spring Yard Cleanup</li>
            <li className="footer__item">Fall Yard Cleanup</li>
            <li className="footer__item">Landscaping Design</li>
            <li className="footer__item">Property Renovation</li>
            <li className="footer__item">Snow Removal</li>
            <li className="footer__item">Seasonal Maintenance</li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Contact Us</h3>
          <p className="footer__item">📞 (647) 996-1001</p>
          <p className="footer__item">✉️ info@yourcompany.com</p>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Areas We Service</h3>
          <ul className="footer__list">
            <li className="footer__item">Toronto</li>
            <li className="footer__item">Mississauga</li>
            <li className="footer__item">Brampton</li>
            <li className="footer__item">Oakville</li>
            <li className="footer__item">Vaughan</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} Pall Landscaping. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
