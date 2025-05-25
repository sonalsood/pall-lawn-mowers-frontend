import Img from "../../assets/images/lawn_3.jpg";
import "./BannerImage.scss";

const BannerImage = () => {
  return (
    <section className="banner">
      <img className="banner__img" src={Img} alt="homepage-banner-img" />
    </section>
  );
};

export default BannerImage;
