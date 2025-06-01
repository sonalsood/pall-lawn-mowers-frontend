import "./Hero.scss";

const Hero = ({ image, title, text, onGetQuoteClick }) => {
  return (
    <section className="hero">
      <div className="hero__text-container">
        <p className="hero__text-title">{title}</p>
        <p className="hero__text">{text}</p>
        <div className="hero__button-container">
          <button className="hero__button" onClick={onGetQuoteClick}>
            Get Quote
          </button>
        </div>
      </div>
      <img className="hero__img" src={image} alt="page-hero-img" />
    </section>
  );
};

export default Hero;
