import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import menu from "../../assets/svg/menu-icon.svg";
import "./Header.scss";

const Header = ({ isMenuPanelOpen, handleTogglePanel }) => {
  return (
    <header>
      <button className="header__menu-button" onClick={handleTogglePanel}>
        <img className="header__menu-icon" src={menu} alt="menu-icon-mobile" />
      </button>
      <Logo />
      <NavBar />
      <button className="header__button">Get Quote</button>
    </header>
  );
};

export default Header;
