import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import Services from "../../components/Services/Services";
import Gallery from "../../components/Gallery/Gallery";
import heroImg from "../../assets/images/lawn_4.jpg";

const HomePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={heroImg}
        title="Transforming Spaces, One Lawn at a Time"
        text="From seasonal maintenance to complete landscape makeovers, we bring
          your outdoor vision to life — with quality, care, and craftsmanship
          you can count on."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“Pall Landscaping completely transformed our backyard—professional, on
          time, and a pleasure to work with!”"
        name="Amanda R., Mississauga"
      />
      <Services />
      <Gallery />
    </>
  );
};

export default HomePage;
