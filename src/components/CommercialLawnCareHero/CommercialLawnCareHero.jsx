import heroImg from "../../assets/images/lawn_3.jpg";
import "../Hero/Hero.scss";

const CommercialLawnCareHero = ({ onGetQuoteClick }) => {
  return (
    <section className="hero">
      <div className="hero__text-container">
        <p className="hero__text-title">
          Keep Your Commercial Property Pristine Year-Round.
        </p>
        <p className="hero__text">
          Reliable, professional lawn care services tailored for businesses.
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

export default CommercialLawnCareHero;
