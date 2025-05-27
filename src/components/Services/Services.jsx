import "./Services.scss";
import mowingImage from "../../assets/images/lawn_11.jpg";
import fallImage from "../../assets/images/fall_3.jpg";
import springImage from "../../assets/images/spring_1.jpg";
import landscapingImage from "../../assets/images/landscaping_1.jpg";
import renoImage from "../../assets/images/reno_1.jpg";
import snowImage from "../../assets/images/snow_5.jpg";
import seasonImage from "../../assets/images/season_1.jpg";

const Services = () => {
  const services = [
    {
      title: "🏡 Lawn Mowing",
      image: mowingImage,
      text: "Keep your lawn looking sharp and healthy with our regular mowing services. We use top-tier equipment to deliver a clean, even cut every time, promoting strong grass growth and a polished curb appeal.",
    },
    {
      title: "🌷 Spring Yard Cleanup",
      image: springImage,
      text: "Refresh your yard after winter with our comprehensive spring cleanup. We remove fallen branches, dead leaves, and other debris to prep your lawn and gardens for the growing season.",
    },
    {
      title: "🍂 Fall Yard Cleanup",
      image: fallImage,
      text: "Protect your property before winter hits with our fall yard cleanup. We manage leaf removal, trim back perennials, and ready your outdoor space for colder months ahead.",
    },
    {
      title: "🌿 Landscaping Design",
      image: landscapingImage,
      text: "Transform your outdoor space into a stunning retreat. Our custom landscape design services blend beauty and functionality, tailored to enhance your property's style and value.",
    },
    {
      title: "🛠️ Property Renovation",
      image: renoImage,
      text: "Give your outdoor space a fresh new look. From patios and walkways to garden beds and retaining walls, we upgrade and reimagine your landscape with precision and creativity.",
    },
    {
      title: "❄️ Snow Removal",
      image: snowImage,
      text: "Stay safe and stress-free all winter long. Our prompt snow removal services clear driveways, sidewalks, and entrances so you can enjoy peace of mind during snowy conditions.",
    },
    {
      title: "🔁 Seasonal Maintenance",
      image: seasonImage,
      text: "Year-round care, no hassle. We handle all the seasonal essentials—mulching, pruning, fertilizing, and more—to keep your property vibrant, tidy, and thriving.",
    },
  ];
  return (
    <section className="services">
      <h2 className="services__title">What We Offer</h2>
      <div className="services__cards">
        {services.map((service, index) => (
          <div key={index} className="services__card">
            <div>
              <div className="services__image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="services__image"
                />
              </div>
              <h3 className="services__label">{service.title}</h3>
            </div>
            <p className="services__text">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
