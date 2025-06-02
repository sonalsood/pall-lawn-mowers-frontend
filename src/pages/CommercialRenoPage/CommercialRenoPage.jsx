import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
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
      <Review
        text="“Their renovation work gave our building a fresh, modern look that impressed both clients and employees. Efficient and detail-oriented from start to finish.”"
        name="Karen M., Facility Manager"
      />
    </>
  );
};

export default CommercialRenoPage;
