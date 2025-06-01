import Hero from "../../components/Hero/Hero";
import commercialHeroImg from "../../assets/images/lawn_3.jpg";

const CommercialLawnCarePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={commercialHeroImg}
        title="Professional Lawn Care for Your Commercial Property"
        text="Keep your business looking sharp with reliable, scheduled lawn maintenance tailored to commercial needs."
        onGetQuoteClick={onGetQuoteClick}
      />
    </>
  );
};

export default CommercialLawnCarePage;
