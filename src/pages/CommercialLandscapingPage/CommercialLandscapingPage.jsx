import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import commercialHeroImg from "../../assets/images/landscape_1.jpg";

const CommercialLandscapingPage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={commercialHeroImg}
        title="Commercial Landscaping That Reflects Your Brand"
        text="From retail storefronts to corporate campuses, we design landscapes that are not only beautiful but aligned with your business identity and visitor experience."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“The new landscape design completely elevated our property’s look. Professional, creative, and on-point with our brand — couldn’t be happier.”"
        name="David L., Director of Operations"
      />
    </>
  );
};

export default CommercialLandscapingPage;
