import "./DetailedService.scss";
import mower from "../../assets/svg/lawn-mower.svg";
import spray from "../../assets/svg/spray-bottle.svg";
import rake from "../../assets/svg/rake.svg";
import plant from "../../assets/svg/plant.svg";
import water from "../../assets/svg/water-drop.svg";
import bug from "../../assets/svg/bug.svg";
import tree from "../../assets/svg/tree.svg";

const DetailedService = () => {
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
    <section className="service">
      <h2 className="service__title">Services Offered</h2>
      <div className="service__grid">
        {serv.map((item, index) => (
          <div className="service__item" key={index}>
            <img src={item.image} alt={item.text} className="service__icon" />
            <p className="service__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedService;
