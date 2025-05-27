import Hero from "../../components/Hero/Hero";
import ServicesHero from "../../components/ServicesHero/ServicesHero";

const HomePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero onGetQuoteClick={onGetQuoteClick} />
      <ServicesHero />
    </>
  );
};

export default HomePage;
