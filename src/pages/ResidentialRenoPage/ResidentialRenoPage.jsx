import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import residentialHeroImg from "../../assets/images/reno_2.jpg";

const ResidentialRenoPage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Renovations That Make a Lasting Impact"
        text="Whether you’re tackling repairs, upgrades, or a full overhaul, our team delivers smart, high-quality renovations that restore beauty and value to your property."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“From start to finish, the renovation process was smooth and stress-free. The team transformed our outdated yard into a modern, functional space that truly feels like an extension of our home. It’s added curb appeal and real value to our property.”"
        name="Derek M., Homeowner, Mississauga"
      />
    </>
  );
};

export default ResidentialRenoPage;
