import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";

const HomePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero onGetQuoteClick={onGetQuoteClick} />
      <Review />
    </>
  );
};

export default HomePage;
