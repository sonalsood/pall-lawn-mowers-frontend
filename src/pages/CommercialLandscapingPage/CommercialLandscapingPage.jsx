import Hero from "../../components/Hero/Hero";
import residentialHeroImg from "../../assets/images/patio_1.jpg";

const CommercialLandscapingPage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Commercial Landscaping That Reflects Your Brand"
        text="From retail storefronts to corporate campuses, we design landscapes that are not only beautiful but aligned with your business identity and visitor experience."
        onGetQuoteClick={onGetQuoteClick}
      />
    </>
  );
};

export default CommercialLandscapingPage;
