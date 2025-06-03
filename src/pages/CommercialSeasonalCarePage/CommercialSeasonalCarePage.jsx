import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Industries from "../../components/Industries/Industries";
import residentialHeroImg from "../../assets/images/fall_2.jpg";
import fall from "../../assets/images/fall_4.jpg";
import mow from "../../assets/images/lawn_9.jpg";
import leaf from "../../assets/svg/leaf.svg";
import watering from "../../assets/svg/watering.svg";
import rake from "../../assets/svg/rake.svg";
import snowflakes from "../../assets/svg/snowflakes.svg";
import flower from "../../assets/svg/flower.svg";
import bucket from "../../assets/svg/bucket.svg";

const CommercialSeasonalCarePage = ({ onGetQuoteClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const serv = [
    {
      image: leaf,
      text: "Spring Cleanup",
    },
    {
      image: watering,
      text: "Summer Maintenance",
    },
    {
      image: rake,
      text: "Fall Cleanup",
    },
    {
      image: snowflakes,
      text: "Winterizing",
    },
    {
      image: flower,
      text: "Seasonal Planting",
    },
    {
      image: bucket,
      text: "Debris Removal",
    },
  ];
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Ready for Every Season, Without the Stress"
        text="From fallen leaves to overgrown edges, we handle the seasonal upkeep that keeps your commercial space looking sharp and accessible all year long."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“Our property has never looked better year-round. Their seasonal maintenance is thorough, timely, and professional.”"
        name="Simran Kaur, Property Supervisor"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={fall}
        image2={mow}
        text="At Pall Landscaping, our seasonal maintenance services ensure your commercial property stays vibrant and well-maintained throughout the year. From thorough spring cleanups that prepare your grounds for growth to fall leaf removal and winterizing tasks that protect your landscape from harsh weather, our experienced team handles every detail with precision and care. We tailor our maintenance plans to your property’s unique needs, focusing on enhancing curb appeal, preventing damage, and promoting healthy plant growth. With reliable scheduling, eco-friendly practices, and a commitment to quality, we help your property look its best no matter the season—giving you peace of mind and a standout exterior year-round."
      />
      <Industries />
    </>
  );
};

export default CommercialSeasonalCarePage;
