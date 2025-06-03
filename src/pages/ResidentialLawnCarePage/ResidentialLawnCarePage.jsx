import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import residentialHeroImg from "../../assets/images/lawn_3.jpg";
import mower from "../../assets/svg/lawn-mower.svg";
import spray from "../../assets/svg/spray-bottle.svg";
import rake from "../../assets/svg/rake.svg";
import tree from "../../assets/svg/tree.svg";
import lawn from "../../assets/images/lawn_11.jpg";
import mow from "../../assets/images/lawn_8.jpg";

const ResidentialLawnCarePage = ({ onGetQuoteClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const serv = [
    {
      image: mower,
      text: "Mowing & Trimming",
    },
    {
      image: spray,
      text: "Lawn Fertilization & Weed Control",
    },
    {
      image: rake,
      text: "Spring & Fall Cleanups",
    },
    {
      image: tree,
      text: "Mulching & Garden Bed Maintenance",
    },
  ];
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Your Lawn, Our Care"
        text="Let us handle the mowing, trimming, and maintenance—so you can enjoy a yard that's always green, clean, and inviting."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“I used to dread keeping up with the lawn every week, but ever since hiring this team, I haven’t had to worry about it once. They show up like clockwork, mow with precision, and leave my yard looking sharp and beautifully maintained. I’ve even had neighbors ask who I’m using!”"
        name="Jason R., Homeowner, Brampton"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={lawn}
        image2={mow}
        text="At Pall Landscaping, we treat your home like it’s our own. Our residential lawn care services are built around reliability, attention to detail, and making your life easier. Whether it’s weekly mowing, seasonal cleanups, or keeping your yard weed-free and thriving, our team ensures your outdoor space always looks its best. With responsive support and eco-conscious care, we take pride in delivering a lawn you'll love coming home to."
      />
    </>
  );
};

export default ResidentialLawnCarePage;
