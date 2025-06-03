import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import residentialHeroImg from "../../assets/images/fall_1.jpg";
import mower from "../../assets/svg/lawn-mower.svg";
import spray from "../../assets/svg/spray-bottle.svg";
import rake from "../../assets/svg/rake.svg";
import tree from "../../assets/svg/tree.svg";
import bag from "../../assets/svg/bag.svg";
import cover from "../../assets/svg/plant-care.svg";
import fall01 from "../../assets/images/fall_3.jpg";
import fall02 from "../../assets/images/fall_6.jpg";

const ResidentialFallCleanPage = ({ onGetQuoteClick }) => {
  const serv = [
    {
      image: rake,
      text: "Leaf Raking & Removal",
    },
    {
      image: tree,
      text: "Garden Bed Clearing & Mulching",
    },
    {
      image: mower,
      text: "Final Lawn Cut & Edging",
    },
    {
      image: spray,
      text: "Weed & Lawn Debris Control",
    },
    {
      image: bag,
      text: "Bagging & Curbside Disposal",
    },
    {
      image: cover,
      text: "Plant Bed Winter Preparation",
    },
  ];
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Protect Your Curb Appeal This Fall"
        text="Our fall cleanup service keeps your property looking sharp—removing leaves, branches, and seasonal clutter before it piles up"
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“Every fall, we used to dread the endless leaf raking and garden prep. Hiring this team was the best decision — they cleared everything quickly and thoroughly, from the lawn to the gutters. Our yard was spotless and ready for winter in no time!”"
        name="James T., Homeowner"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={fall01}
        image2={fall02}
        text="Fall is a beautiful season—but also a messy one. At Pall Landscaping, our fall yard cleanup service helps prepare your lawn and garden for the winter ahead. We clear out fallen leaves, trim back overgrowth, and give your yard one last mow before the snow arrives. We also freshen garden beds with mulch and ensure everything is neat and protected. It’s the seasonal reset your property needs to stay healthy, safe, and ready to shine come spring."
      />
    </>
  );
};

export default ResidentialFallCleanPage;
