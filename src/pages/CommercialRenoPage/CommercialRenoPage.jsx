import Hero from "../../components/Hero/Hero";
import residentialHeroImg from "../../assets/images/reno_2.jpg";

const CommercialRenoPage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Expert Renovation. Lasting Impressions."
        text="Our team brings new life to commercial landscapes and structures — from structural improvements to design upgrades — built to impress tenants, clients, and guests alike."
        onGetQuoteClick={onGetQuoteClick}
      />
    </>
  );
};

export default CommercialRenoPage;
