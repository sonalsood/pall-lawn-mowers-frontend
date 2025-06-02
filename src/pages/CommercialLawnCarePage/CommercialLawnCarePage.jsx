import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Industries from "../../components/Industries/Industries";
import commercialHeroImg from "../../assets/images/lawn_3.jpg";
import mower from "../../assets/svg/lawn-mower.svg";
import spray from "../../assets/svg/spray-bottle.svg";
import rake from "../../assets/svg/rake.svg";
import plant from "../../assets/svg/plant.svg";
import water from "../../assets/svg/water-drop.svg";
import bug from "../../assets/svg/bug.svg";
import tree from "../../assets/svg/tree.svg";
import lawn from "../../assets/images/lawn.jpg";
import mow from "../../assets/images/lawn_8.jpg";

const CommercialLawnCarePage = ({ onGetQuoteClick }) => {
  const serv = [
    {
      image: mower,
      text: "Mowing & Edging",
    },
    {
      image: spray,
      text: "Fertilizing & Weed Control",
    },
    {
      image: rake,
      text: "Seasonal Cleanups",
    },
    {
      image: plant,
      text: "Aeration & Overseeding",
    },
    {
      image: water,
      text: "Irrigation Inspection & Maintenance",
    },
    {
      image: bug,
      text: "Pest & Disease Management",
    },
    {
      image: tree,
      text: "Mulching & Bed Maintenance",
    },
  ];
  return (
    <>
      <Hero
        image={commercialHeroImg}
        title="Professional Lawn Care for Your Commercial Property"
        text="Keep your business looking sharp with reliable, scheduled lawn maintenance tailored to commercial needs."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“We've been using Pall Landscaping to maintain the grounds at our office complex, and the results speak for themselves. The lawn is always immaculate, the team is punctual and professional, and our customers constantly compliment how well-kept the property looks. It’s more than just curb appeal — it’s a great first impression for our business.”"
        name="Jessica M., Property Manager, Mississauga"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={lawn}
        image2={mow}
        text="At Pall Landscaping, we specialize in professional commercial lawn
          care services designed to keep your business exterior clean, healthy,
          and inviting. From precise mowing and edging to tailored fertilization
          and weed control, our trained crews ensure your landscape reflects the
          quality of your brand. Whether it’s an office park, retail plaza, or
          multi-unit complex, we deliver reliable service schedules,
          eco-friendly practices, and responsive support—so your property always
          makes a great first impression."
      />
      <Industries />
    </>
  );
};

export default CommercialLawnCarePage;
