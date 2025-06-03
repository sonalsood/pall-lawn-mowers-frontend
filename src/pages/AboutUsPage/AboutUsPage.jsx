import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import Gallery from "../../components/Gallery/Gallery";
import heroImg from "../../assets/images/lawn_4.jpg";
import "./AboutUsPage.scss";

const AboutUsPage = ({ onGetQuoteClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Hero
        image={heroImg}
        title="Professional. Personal. Pall."
        text="Pall Landscaping was built on a simple idea: treat every project like it matters — because it does. Whether you're a homeowner looking to refresh your yard or a business needing dependable maintenance, our team delivers quality you can count on. Get to know who we are and how we bring outdoor spaces across the GTA to life — one project at a time."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text={
          <>
            <h2 className="about__heading">Our Mission</h2>
            At Pall Landscaping, our mission is to transform outdoor spaces into
            beautiful, functional, and sustainable environments that reflect the
            unique needs of each client — whether residential or commercial.
            <br />
            <br />
            We believe that every property, no matter the size or scope,
            deserves the same level of care and attention. That’s why we
            approach each project with integrity, precision, and a deep respect
            for our craft. From routine lawn care and seasonal maintenance to
            custom landscaping designs and property renovations, we strive to
            deliver results that exceed expectations and stand the test of time.
            <br />
            <br />
            Rooted in the GTA, we take pride in building long-term relationships
            with our clients based on trust, transparency, and consistent
            quality. Our goal is not just to maintain landscapes — but to enrich
            lives, elevate communities, and grow spaces where people feel proud
            to live and work.
            <br />
          </>
        }
        name="Tajinderpal Singh"
      />
      <Gallery />
    </>
  );
};

export default AboutUsPage;
