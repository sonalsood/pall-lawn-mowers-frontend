import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
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
      <Review
        text="“They’ve made winter so much easier for our family. No more early morning shoveling or worrying about icy driveways — their snow removal service is prompt, reliable, and thorough every time.”"
        name="Matt J., Homeowner"
      />
    </>
  );
};

export default ResidentialSnowRemoval;
