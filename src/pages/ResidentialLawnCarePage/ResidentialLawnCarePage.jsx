import Hero from "../../components/Hero/Hero";
import residentialHeroImg from "../../assets/images/lawn_3.jpg";

const ResidentialLawnCarePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Your Lawn, Our Care"
        text="Let us handle the mowing, trimming, and maintenance—so you can enjoy a yard that's always green, clean, and inviting."
        onGetQuoteClick={onGetQuoteClick}
      />
    </>
  );
};

export default ResidentialLawnCarePage;
