import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import residentialHeroImg from "../../assets/images/reno_2.jpg";
import stairs from "../../assets/svg/stairs.svg";
import plan from "../../assets/svg/blueprint.svg";
import paver from "../../assets/svg/stone-path.svg";
import wall from "../../assets/svg/bricks.svg";
import fence from "../../assets/svg/fence.svg";
import grass from "../../assets/svg/grass.svg";
import pathway from "../../assets/images/reno_6.jpg";
import patio from "../../assets/images/reno_1.jpg";

const ResidentialRenoPage = ({ onGetQuoteClick }) => {
  const serv = [
    {
      image: paver,
      text: "Patio & Walkway Installation",
    },
    {
      image: wall,
      text: "Retaining Wall Construction",
    },
    {
      image: fence,
      text: "Fence & Privacy Screen Installation",
    },
    {
      image: stairs,
      text: "Outdoor Steps & Entryway Rebuild",
    },
    {
      image: grass,
      text: "Lawn Replacement & Sod Installation",
    },
    {
      image: plan,
      text: "Yard Re-Grading & Layout Redesign",
    },
  ];
  return (
    <>
      <Hero
        image={residentialHeroImg}
        title="Renovations That Make a Lasting Impact"
        text="Whether you’re tackling repairs, upgrades, or a full overhaul, our team delivers smart, high-quality renovations that restore beauty and value to your property."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“From start to finish, the renovation process was smooth and stress-free. The team transformed our outdated yard into a modern, functional space that truly feels like an extension of our home. It’s added curb appeal and real value to our property.”"
        name="Derek M., Homeowner, Mississauga"
      />
      <DetailedService serv={serv} />
      <WhyChooseUs
        image1={pathway}
        image2={patio}
        text="Renovating your outdoor space is about more than just looks—it’s about function, flow, and lasting enjoyment. At Pall Landscaping, we offer full-service residential renovations including patios, fences, retaining walls, and complete yard redesigns. Whether you're solving drainage issues, boosting curb appeal, or building a better place to relax, we bring skilled craftsmanship and reliable project management to every job. Let’s build something beautiful—together."
      />
    </>
  );
};

export default ResidentialRenoPage;
