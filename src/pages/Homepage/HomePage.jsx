import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";
import Gallery from "../../components/Gallery/Gallery";

const HomePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero onGetQuoteClick={onGetQuoteClick} />
      <Review />
      <Services />
      <Gallery />
    </>
  );
};

export default HomePage;
