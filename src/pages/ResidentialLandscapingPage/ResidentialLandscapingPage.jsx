import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import residentialHeroImg from "../../assets/images/patio_1.jpg";

const ResidentialLandscapingPage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Bring Your Outdoor Vision to Life"
        text="From cozy patios to lush garden beds, we design landscapes that match your lifestyle and reflect your personal style—beautiful, functional, and one-of-a-kind."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“We had a rough idea of what we wanted, but the team brought it to life beyond our expectations. They designed a stunning backyard with lush greenery and a beautiful stone patio that’s now our favorite hangout spot. The attention to detail and craftsmanship was top-notch.”"
        name="Kajal Sharma, Homeowner"
      />
    </>
  );
};

export default ResidentialLandscapingPage;
