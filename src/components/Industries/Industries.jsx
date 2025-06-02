import arrow from "../../assets/svg/arrow-2.svg";
import "./Industries.scss";

const industries = [
  "Office Complexes",
  "Retail Centers & Plazas",
  "Industrial Parks",
  "Multi-Residential Properties",
  "Municipal Grounds",
  "Hotels and Resorts",
];

const Industries = () => {
  return (
    <section className="industries">
      <h2 className="industries__title">Industries We Serve</h2>
      <p className="industries__intro">
        Our services are tailored to meet the specific needs of a wide range of
        commercial properties:
      </p>
      <ul className="industries__list">
        {industries.map((industry, index) => (
          <li key={index} className="industries__item">
            <img
              className="industries__item-icon"
              src={arrow}
              alt="right-arrow-icon"
            />
            <span className="industries__text">{industry}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Industries;
