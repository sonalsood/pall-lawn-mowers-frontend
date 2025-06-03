import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import residentialHeroImg from "../../assets/images/spring_2.jpg";
import mower from "../../assets/svg/lawn-mower.svg";
import spray from "../../assets/svg/spray-bottle.svg";
import rake from "../../assets/svg/rake.svg";
import tree from "../../assets/svg/tree.svg";
import spring from "../../assets/images/spring_5.jpg";
import flower from "../../assets/images/spring_6.jpg";

const ResidentialSpringCleanPage = ({ onGetQuoteClick }) => {
  const serv = [
    {
      image: rake,
      text: "Yard Raking & Leaf Cleanup",
    },
    {
      image: tree,
      text: "Garden Bed Cleanup & Edging",
    },
    {
      image: mower,
      text: "First Mow of the Season",
    },
    {
      image: spray,
      text: "Weed & Debris Control",
    },
  ];
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Your Yard Deserves a Fresh Start"
        text="Clear out the winter mess and make room for spring. Our residential yard cleanup gets your lawn, beds, and bushes back in shape—ready for sunshine and new growth"
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“After a long winter, our yard was a mess—leaves, branches, and overgrown beds everywhere. The crew came in and completely transformed it. They cleaned, trimmed, and prepped everything for the new season. It looked like a professional garden when they were done. Absolutely worth it!”"
        name="Meghan L., Homeowner"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={spring}
        image2={flower}
        text="Spring is the perfect time to refresh your yard and prepare it for the growing season. At Pall Landscaping, our residential spring cleanup service is designed to remove winter’s mess and jumpstart a healthy, beautiful lawn. From raking up leaves and clearing debris to the first mow and bed mulching, we handle every detail so you can enjoy a clean, green outdoor space from day one. Trust our team for prompt, professional service that sets the tone for a great-looking yard all season long."
      />
    </>
  );
};

export default ResidentialSpringCleanPage;
