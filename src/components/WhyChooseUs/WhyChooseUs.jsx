import "./WhyChooseUs.scss";
import reliable from "../../assets/svg/calendar.svg";
import uniform from "../../assets/svg/team.svg";
import insured from "../../assets/svg/certificate.svg";
import eco from "../../assets/svg/leaf.svg";
import emergency from "../../assets/svg/support.svg";
import guarantee from "../../assets/svg/thumbsup.svg";
import lawn from "../../assets/images/lawn.jpg"; //
import mower from "../../assets/images/lawn_8.jpg"; //

const reasons = [
  { icon: reliable, label: "Reliable scheduling" },
  { icon: uniform, label: "Uniformed and trained crews" },
  { icon: insured, label: "Licensed & insured" },
  { icon: eco, label: "Eco-friendly solutions" },
  { icon: emergency, label: "Emergency support" },
  { icon: guarantee, label: "Satisfaction guarantee" },
];

const WhyChooseUs = ({ image1, image2, text }) => {
  return (
    <section className="why-us">
      <h2 className="why-us__title">Why Choose Us</h2>
      <div className="why-us__text-container">
        <p className="why-us__text why-us__text-width">{text}</p>
        <div className="why-us__img-wrapper">
          <img className="why-us__img" src={image1} alt="page-image01" />
        </div>
      </div>
      <div className="why-us__list-container">
        <div className="why-us__img-wrapper">
          <img className="why-us__img" src={image2} alt="page-image02" />
        </div>
        <ul className="why-us__list">
          {reasons.map((item, index) => (
            <li key={index} className="why-us__item">
              <img src={item.icon} alt={item.label} className="why-us__icon" />
              <span className="why-us__text">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
