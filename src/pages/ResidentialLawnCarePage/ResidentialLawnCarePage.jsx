import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import residentialHeroImg from "../../assets/images/lawn_3.jpg";

const ResidentialLawnCarePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Your Lawn, Our Care"
        text="Let us handle the mowing, trimming, and maintenance—so you can enjoy a yard that's always green, clean, and inviting."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“I used to dread keeping up with the lawn every week, but ever since hiring this team, I haven’t had to worry about it once. They show up like clockwork, mow with precision, and leave my yard looking sharp and beautifully maintained. I’ve even had neighbors ask who I’m using!”"
        name="Jason R., Homeowner, Brampton"
      />
    </>
  );
};

export default ResidentialLawnCarePage;
