import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Industries from "../../components/Industries/Industries";
import residentialHeroImg from "../../assets/images/snow_2.jpg";
import handshake from "../../assets/svg/handshake.svg";
import snowflakes from "../../assets/svg/snowflakes.svg";
import shovel from "../../assets/svg/shovel.svg";
import snowplow from "../../assets/svg/snowplow.svg";
import alert from "../../assets/svg/alert.svg";
import snow from "../../assets/images/snow_3.jpg";
import winter from "../../assets/images/snow_7.jpg";

const CommercialSnowRemovalPage = ({ onGetQuoteClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const serv = [
    {
      image: snowplow,
      text: "Snow Plowing & Clearing",
    },
    {
      image: shovel,
      text: "Sidewalk & Pathway Shoveling",
    },
    {
      image: snowflakes,
      text: "Salting & De-Icing Services",
    },
    {
      image: alert,
      text: "Emergency Snow Removal",
    },
    {
      image: handshake,
      text: "Custom Service Contracts",
    },
  ];
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Reliable Snow Removal for Uninterrupted Business"
        text="Keep your property safe and accessible during winter storms. Our prompt and professional snow removal services minimize hazards and downtime for your staff and visitors."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“Reliable and fast — they kept our property safe and accessible all winter. We never had to worry about snow or ice delays.”"
        name="James T., Operations Manager"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={snow}
        image2={winter}
        text="At Pall Landscaping, we provide dependable commercial snow removal services designed to keep your property safe, accessible, and compliant all winter long. With 24/7 weather monitoring and rapid dispatch, our trained crews arrive equipped with professional-grade machinery to clear snow from parking lots, walkways, loading zones, and entrances—before your business opens. We use eco-conscious de-icing materials to minimize environmental impact while reducing slip-and-fall risks. Every service is documented for insurance and compliance, and our custom plans—whether per-event or seasonal—come with guaranteed response times and transparent communication. From start to finish, we act as a reliable winter partner dedicated to safety, efficiency, and peace of mind."
      />
      <Industries />
    </>
  );
};

export default CommercialSnowRemovalPage;
