import Hero from "../../components/Hero/Hero";
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
    </>
  );
};

export default ResidentialRenoPage;
