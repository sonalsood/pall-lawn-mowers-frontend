import { useLocation } from "react-router-dom";
import "./BannerImage.scss";

import HomeBanner from "../../assets/images/lawn_3.jpg";
import LawnBanner from "../../assets/images/lawn_1.jpg";
import LandscapingBanner from "../../assets/images/plants_1.jpg";
import RenoBanner from "../../assets/images/reno_3.jpg";
import SnowBanner from "../../assets/images/snow_6.jpg";
import SeasonalBanner from "../../assets/images/spring_2.jpg";
import SpringBanner from "../../assets/images/spring_4.jpg";
import FallBanner from "../../assets/images/fall_2.jpg";
import AboutBanner from "../../assets/images/spring_7.jpg";
import ContactBanner from "../../assets/images/spring_10.jpg";

const BannerImage = () => {
  const location = useLocation();

  const getBannerImage = (path) => {
    switch (path) {
      case "/":
        return { image: HomeBanner, alt: "Home banner" };
      case "/commercial-lawn-care":
        return { image: LawnBanner, alt: "Lawn care banner" };
      case "/commercial-landscaping-design":
        return { image: LandscapingBanner, alt: "Landscaping banner" };
      case "/commercial-property-renovation":
        return { image: RenoBanner, alt: "Renovation banner" };
      case "/commercial-snow-removal":
        return { image: SnowBanner, alt: "Snow banner" };
      case "/commercial-seasonal-maintenance":
        return { image: SeasonalBanner, alt: "Seasonal banner" };
      case "/residential-lawn-care":
        return { image: LawnBanner, alt: "Lawn banner" };
      case "/residential-spring-cleanup":
        return { image: SpringBanner, alt: "Spring banner" };
      case "/residential-fall-cleanup":
        return { image: FallBanner, alt: "Fall banner" };
      case "/residential-landscaping-design":
        return { image: LandscapingBanner, alt: "Landscaping banner" };
      case "/residential-property-renovation":
        return { image: RenoBanner, alt: "Renovation banner" };
      case "/residential-snow-removal":
        return { image: SnowBanner, alt: "Snow banner" };
      case "/about":
        return { image: AboutBanner, alt: "About banner" };
      case "/contact":
        return { image: ContactBanner, alt: "Contact banner" };
      default:
        return { image: HomeBanner, alt: "Default banner" };
    }
  };

  const { image, alt } = getBannerImage(location.pathname);

  return (
    <section className="banner">
      <img className="banner__img" src={image} alt={alt} />
    </section>
  );
};

export default BannerImage;
