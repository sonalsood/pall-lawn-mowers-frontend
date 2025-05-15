import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import menu from "../../assets/svg/menu-icon.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img
        className="header__menu-icon-mob"
        src={menu}
        alt="menu-icon-mobile"
      />
      <Logo />
      <NavBar />
      <button className="header__button">Get Quote</button>
    </header>
  );
};

export default Header;
