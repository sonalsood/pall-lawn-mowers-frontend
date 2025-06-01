import Hero from "../../components/Hero/Hero";
import residentialHeroImg from "../../assets/images/spring_2.jpg";

const ResidentialSpringCleanPage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Your Yard Deserves a Fresh Start"
        text="Clear out the winter mess and make room for spring. Our residential yard cleanup gets your lawn, beds, and bushes back in shape—ready for sunshine and new growth"
        onGetQuoteClick={onGetQuoteClick}
      />
    </>
  );
};

export default ResidentialSpringCleanPage;
