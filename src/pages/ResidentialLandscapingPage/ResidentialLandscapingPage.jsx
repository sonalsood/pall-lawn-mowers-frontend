import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import residentialHeroImg from "../../assets/images/patio_1.jpg";
import plant from "../../assets/svg/plant.svg";
import tree from "../../assets/svg/tree.svg";
import rake from "../../assets/svg/rake.svg";
import water from "../../assets/svg/water-drop.svg";
import blueprint from "../../assets/svg/blueprint.svg";
import paver from "../../assets/svg/stone-path.svg";
import plants from "../../assets/gallery/photo_5.jpg";
import pathway from "../../assets/images/pathway.jpg";

const ResidentialLandscapingPage = ({ onGetQuoteClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const serv = [
    {
      image: plant,
      text: "Garden Bed Planning & Installation",
    },
    {
      image: tree,
      text: "Tree & Shrub Placement",
    },
    {
      image: rake,
      text: "Soil Grading & Lawn Shaping",
    },
    {
      image: water,
      text: "Irrigation Layout & Setup",
    },
    {
      image: paver,
      text: "Hardscaping: Patios, Walkways & Borders",
    },
    {
      image: blueprint,
      text: "Custom Landscape Design Plans",
    },
  ];
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Bring Your Outdoor Vision to Life"
        text="From cozy patios to lush garden beds, we design landscapes that match your lifestyle and reflect your personal style—beautiful, functional, and one-of-a-kind."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“We had a rough idea of what we wanted, but the team brought it to life beyond our expectations. They designed a stunning backyard with lush greenery and a beautiful stone patio that’s now our favorite hangout spot. The attention to detail and craftsmanship was top-notch.”"
        name="Kajal Sharma, Homeowner"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={plants}
        image2={pathway}
        text="Every great outdoor space begins with a smart design. At Pall Landscaping, we collaborate with homeowners to turn their vision into a detailed landscape plan—balancing beauty, function, and sustainability. Whether you’re starting from scratch or refreshing an existing yard, our team handles everything from planting beds and tree placement to grading, irrigation, and hardscaping. We design with purpose and build with care—so your landscape looks great and grows even better."
      />
    </>
  );
};

export default ResidentialLandscapingPage;
