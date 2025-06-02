import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Industries from "../../components/Industries/Industries";
import residentialHeroImg from "../../assets/images/reno_2.jpg";
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

const CommercialRenoPage = ({ onGetQuoteClick }) => {
  const serv = [
    {
      image: mower,
      text: "Exterior Renovation & Facade Upgrades",
    },
    {
      image: spray,
      text: "Interior Fit-Outs & Layout Redesign",
    },
    {
      image: plant,
      text: "Accessibility & Safety Upgrades",
    },
    {
      image: plant,
      text: "Parking Lot Resurfacing & Line Painting",
    },
    {
      image: water,
      text: "Signage & Wayfinding Installation",
    },
    {
      image: bug,
      text: "Energy Efficiency Upgrades",
    },
    {
      image: tree,
      text: "Landscaping & Exterior Site Improvements",
    },
  ];
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Expert Renovation. Lasting Impressions."
        text="Our team brings new life to commercial landscapes and structures — from structural improvements to design upgrades — built to impress tenants, clients, and guests alike."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“Their renovation work gave our building a fresh, modern look that impressed both clients and employees. Efficient and detail-oriented from start to finish.”"
        name="Karen M., Facility Manager"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={lawn}
        image2={mow}
        text="At Pall Landscaping, we understand that a well-renovated exterior can completely transform the perception and value of your commercial property. Our team brings deep expertise in upgrading aging or underperforming landscapes into refreshed, functional, and modern outdoor spaces that reflect your brand and meet your tenants' or visitors’ needs. From revitalizing hardscapes and replanting beds to resolving drainage issues and installing updated lighting or signage, we manage renovations with minimal disruption to daily operations. Every project is approached with careful planning, responsive communication, and an eye for both aesthetics and long-term performance—making us a trusted partner in elevating your property's appeal and usability."
      />
      <Industries />
    </>
  );
};

export default CommercialRenoPage;
