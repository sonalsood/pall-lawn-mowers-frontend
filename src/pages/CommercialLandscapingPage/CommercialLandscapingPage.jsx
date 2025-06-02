import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Industries from "../../components/Industries/Industries";
import commercialHeroImg from "../../assets/images/landscape_1.jpg";
////
import mower from "../../assets/svg/lawn-mower.svg";
import spray from "../../assets/svg/spray-bottle.svg";
import rake from "../../assets/svg/rake.svg";
import plant from "../../assets/svg/plant.svg";
import water from "../../assets/svg/water-drop.svg";
import bug from "../../assets/svg/bug.svg";
import tree from "../../assets/svg/tree.svg";
////
import lawn from "../../assets/images/lawn.jpg";
import mow from "../../assets/images/lawn_8.jpg";
/////

const CommercialLandscapingPage = ({ onGetQuoteClick }) => {
  const serv = [
    {
      image: mower,
      text: "Custom Landscape Planning",
    },
    {
      image: spray,
      text: "Hardscape Design",
    },
    {
      image: plant,
      text: "Softscape Layouts",
    },
    {
      image: plant,
      text: "Seasonal & Thematic Enhancements",
    },
    {
      image: water,
      text: "Commercial Gardens & Courtyards",
    },
    {
      image: bug,
      text: "Lighting & Wayfinding",
    },
    {
      image: tree,
      text: "Sustainable Solutions",
    },
  ];
  return (
    <>
      <Hero
        image={commercialHeroImg}
        title="Commercial Landscaping That Reflects Your Brand"
        text="From retail storefronts to corporate campuses, we design landscapes that are not only beautiful but aligned with your business identity and visitor experience."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“The new landscape design completely elevated our property’s look. Professional, creative, and on-point with our brand — couldn’t be happier.”"
        name="David L., Director of Operations"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={lawn}
        image2={mow}
        text="At Pall Landscaping, we don’t just maintain outdoor spaces—we bring them to life. Our commercial landscaping design services are built around your business goals, whether it's boosting curb appeal, increasing usability, or creating a lasting first impression. We work closely with property managers, developers, and architects to deliver tailored designs that are functional, scalable, and sustainable. Our experienced team combines creative vision with deep horticultural knowledge to design landscapes that enhance brand image and add long-term value. With licensed professionals, transparent project timelines, and a commitment to eco-conscious solutions, we turn ordinary grounds into standout spaces—on time and within budget."
      />
      <Industries />
    </>
  );
};

export default CommercialLandscapingPage;
