import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import residentialHeroImg from "../../assets/images/fall_2.jpg";

const CommercialSeasonalCarePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Ready for Every Season, Without the Stress"
        text="From fallen leaves to overgrown edges, we handle the seasonal upkeep that keeps your commercial space looking sharp and accessible all year long."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“Our property has never looked better year-round. Their seasonal maintenance is thorough, timely, and professional.”"
        name="Simran Kaur, Property Supervisor"
      />
    </>
  );
};

export default CommercialSeasonalCarePage;
