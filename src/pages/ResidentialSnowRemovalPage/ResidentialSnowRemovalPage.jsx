import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import residentialHeroImg from "../../assets/images/snow_1.jpg";
import calendar from "../../assets/svg/calendar.svg";
import stairs from "../../assets/svg/stairs.svg";
import snowflakes from "../../assets/svg/snowflakes.svg";
import shovel from "../../assets/svg/shovel.svg";
import snowplow from "../../assets/svg/snowplow.svg";
import snow from "../../assets/images/snow_8.jpg";
import winter from "../../assets/images/snow_9.jpg";

const ResidentialSnowRemovalPage = ({ onGetQuoteClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const serv = [
    {
      image: shovel,
      text: "Driveway Snow Shoveling",
    },
    {
      image: snowplow,
      text: "Snow Plowing for Larger Properties",
    },
    {
      image: snowflakes,
      text: "Salting & De-Icing",
    },
    {
      image: stairs,
      text: "Walkway & Stair Clearing",
    },
    {
      image: calendar,
      text: "Scheduled & On-Demand Options",
    },
  ];
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Snow-Free Driveways, All Winter Long"
        text="Say goodbye to icy mornings and endless shoveling. Our reliable snow removal team ensures your property stays clear, safe, and accessible—every snowfall, every time."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“They’ve made winter so much easier for our family. No more early morning shoveling or worrying about icy driveways — their snow removal service is prompt, reliable, and thorough every time.”"
        name="Matt J., Homeowner"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={snow}
        image2={winter}
        text="Winter weather doesn’t wait—and neither do we. At Pall Landscaping, our residential snow removal services are prompt, reliable, and thorough. From driveways and walkways to stairs and sidewalks, we keep your property clear, safe, and compliant. Choose from scheduled snow clearing, on-demand visits, or full-season coverage—so you can relax and stay warm while we handle the storm."
      />
    </>
  );
};

export default ResidentialSnowRemovalPage;
