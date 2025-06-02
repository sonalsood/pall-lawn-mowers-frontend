import "./DetailedService.scss";

const DetailedService = ({ serv = [] }) => {
  return (
    <section className="service">
      <h2 className="service__title">Services We Offer</h2>
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
