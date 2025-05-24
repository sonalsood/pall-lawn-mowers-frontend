import { Link } from "react-router-dom";
import heroImg from "../../assets/images/lawn_4.jpg";
import "./Hero.scss";
import { formToJSON } from "axios";

const Hero = ({ onGetQuoteClick }) => {
  return (
    <section className="hero">
      <div className="hero__text-container">
        <p className="hero__text-title">
          Transforming Spaces, One Lawn at a Time
        </p>
        <p className="hero__text">
          From seasonal maintenance to complete landscape makeovers, we bring
          your outdoor vision to life — with quality, care, and craftsmanship
          you can count on.
        </p>
        <div className="hero__button-container">
          <button className="hero__button" onClick={onGetQuoteClick}>
            Get Quote
          </button>
        </div>
      </div>
      <img className="hero__img" src={heroImg} alt="home-hero-img" />
    </section>
  );
};

export default Hero;
