import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
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
      <Review
        text="“Every fall, we used to dread the endless leaf raking and garden prep. Hiring this team was the best decision — they cleared everything quickly and thoroughly, from the lawn to the gutters. Our yard was spotless and ready for winter in no time!”"
        name="James T., Homeowner"
      />
    </>
  );
};

export default ResidentialFallCleanPage;
