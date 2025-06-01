import Hero from "../../components/Hero/Hero";
import residentialHeroImg from "../../assets/images/fall_1.jpg";

const CommercialSeasonalCarePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Ready for Every Season, Without the Stress"
        text="From fallen leaves to overgrown edges, we handle the seasonal upkeep that keeps your commercial space looking sharp and accessible all year long."
        onGetQuoteClick={onGetQuoteClick}
      />
    </>
  );
};

export default CommercialSeasonalCarePage;
