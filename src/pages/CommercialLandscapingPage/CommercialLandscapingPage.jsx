import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Industries from "../../components/Industries/Industries";
import commercialHeroImg from "../../assets/images/landscape_1.jpg";
import landscaping01 from "../../assets/images/landscaping_2.jpg";
import landscaping02 from "../../assets/images/landscaping_3.jpg";
import blueprint from "../../assets/svg/blueprint.svg";
import bricks from "../../assets/svg/bricks.svg";
import flower from "../../assets/svg/flower.svg";
import sparkle from "../../assets/svg/sparkles.svg";
import garden from "../../assets/svg/garden.svg";
import bulb from "../../assets/svg/bulb.svg";
import recycle from "../../assets/svg/recycle.svg";

const CommercialLandscapingPage = ({ onGetQuoteClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const serv = [
    {
      image: blueprint,
      text: "Custom Landscape Planning",
    },
    {
      image: bricks,
      text: "Hardscape Design",
    },
    {
      image: flower,
      text: "Softscape Layouts",
    },
    {
      image: sparkle,
      text: "Seasonal & Thematic Enhancements",
    },
    {
      image: garden,
      text: "Commercial Gardens & Courtyards",
    },
    {
      image: bulb,
      text: "Lighting & Wayfinding",
    },
    {
      image: recycle,
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
        image1={landscaping01}
        image2={landscaping02}
        text="At Pall Landscaping, we don’t just maintain outdoor spaces—we bring them to life. Our commercial landscaping design services are built around your business goals, whether it's boosting curb appeal, increasing usability, or creating a lasting first impression. We work closely with property managers, developers, and architects to deliver tailored designs that are functional, scalable, and sustainable. Our experienced team combines creative vision with deep horticultural knowledge to design landscapes that enhance brand image and add long-term value. With licensed professionals, transparent project timelines, and a commitment to eco-conscious solutions, we turn ordinary grounds into standout spaces—on time and within budget."
      />
      <Industries />
    </>
  );
};

export default CommercialLandscapingPage;
