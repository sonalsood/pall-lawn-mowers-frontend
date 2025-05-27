import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";

const HomePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero onGetQuoteClick={onGetQuoteClick} />
      <Review />
      <Services />
    </>
  );
};

export default HomePage;
