import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Logo />
      <NavBar />
      <button>Get Quote</button>
    </header>
  );
};

export default Header;
