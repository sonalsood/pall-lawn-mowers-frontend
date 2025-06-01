import Hero from "../../components/Hero/Hero";
import residentialHeroImg from "../../assets/images/fall_1.jpg";

const ResidentialFallCleanPage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Protect Your Curb Appeal This Fall"
        text="Our fall cleanup service keeps your property looking sharp—removing leaves, branches, and seasonal clutter before it piles up"
        onGetQuoteClick={onGetQuoteClick}
      />
    </>
  );
};

export default ResidentialFallCleanPage;
