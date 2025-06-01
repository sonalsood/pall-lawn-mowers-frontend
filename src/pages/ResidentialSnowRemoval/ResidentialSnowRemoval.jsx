import Hero from "../../components/Hero/Hero";
import residentialHeroImg from "../../assets/images/snow_1.jpg";

const ResidentialSnowRemoval = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Snow-Free Driveways, All Winter Long"
        text="Say goodbye to icy mornings and endless shoveling. Our reliable snow removal team ensures your property stays clear, safe, and accessible—every snowfall, every time."
        onGetQuoteClick={onGetQuoteClick}
      />
    </>
  );
};

export default ResidentialSnowRemoval;
