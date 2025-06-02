import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import residentialHeroImg from "../../assets/images/snow_2.jpg";

const CommercialSnowRemoval = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Reliable Snow Removal for Uninterrupted Business"
        text="Keep your property safe and accessible during winter storms. Our prompt and professional snow removal services minimize hazards and downtime for your staff and visitors."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“Reliable and fast — they kept our property safe and accessible all winter. We never had to worry about snow or ice delays.”"
        name="James T., Operations Manager"
      />
    </>
  );
};

export default CommercialSnowRemoval;
