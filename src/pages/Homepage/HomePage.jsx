import Hero from "../../components/Hero/Hero";

const HomePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero onGetQuoteClick={onGetQuoteClick} />
    </>
  );
};

export default HomePage;
