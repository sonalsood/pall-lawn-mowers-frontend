import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import residentialHeroImg from "../../assets/images/spring_2.jpg";

const ResidentialSpringCleanPage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Your Yard Deserves a Fresh Start"
        text="Clear out the winter mess and make room for spring. Our residential yard cleanup gets your lawn, beds, and bushes back in shape—ready for sunshine and new growth"
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“After a long winter, our yard was a mess—leaves, branches, and overgrown beds everywhere. The crew came in and completely transformed it. They cleaned, trimmed, and prepped everything for the new season. It looked like a professional garden when they were done. Absolutely worth it!”"
        name="Meghan L., Homeowner"
      />
    </>
  );
};

export default ResidentialSpringCleanPage;
