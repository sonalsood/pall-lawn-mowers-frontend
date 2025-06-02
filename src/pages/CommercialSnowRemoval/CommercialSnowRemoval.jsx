import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Industries from "../../components/Industries/Industries";
import residentialHeroImg from "../../assets/images/snow_2.jpg";
////
import mower from "../../assets/svg/lawn-mower.svg";
import spray from "../../assets/svg/spray-bottle.svg";
import rake from "../../assets/svg/rake.svg";
import plant from "../../assets/svg/plant.svg";
import water from "../../assets/svg/water-drop.svg";
import bug from "../../assets/svg/bug.svg";
import tree from "../../assets/svg/tree.svg";
////
import snow from "../../assets/images/snow_3.jpg";
import winter from "../../assets/images/snow_4.jpg";
/////

const CommercialSnowRemoval = ({ onGetQuoteClick }) => {
  const serv = [
    {
      image: mower,
      text: "Snow Plowing & Clearing",
    },
    {
      image: spray,
      text: "Sidewalk & Pathway Shoveling",
    },
    {
      image: plant,
      text: "Salting & De-Icing Services",
    },
    {
      image: plant,
      text: "Emergency Snow Removal",
    },
    {
      image: water,
      text: "Snow Hauling & Relocation",
    },
    {
      image: bug,
      text: "Ice Management & Monitoring",
    },
    {
      image: tree,
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

export default CommercialSnowRemoval;
