import Hero from "../../components/Hero/Hero";
import residentialHeroImg from "../../assets/images/patio_1.jpg";

const ResidentialLandscapingPage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Bring Your Outdoor Vision to Life"
        text="From cozy patios to lush garden beds, we design landscapes that match your lifestyle and reflect your personal style—beautiful, functional, and one-of-a-kind."
        onGetQuoteClick={onGetQuoteClick}
      />
    </>
  );
};

export default ResidentialLandscapingPage;
