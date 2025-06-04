import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import Gallery from "../../components/Gallery/Gallery";
import heroImg from "../../assets/images/spring_9.jpg";
import "./ContactUsPage.scss";

const ContactUsPage = ({ onGetQuoteClick }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Hero
        image={heroImg}
        title="We’re All Ears — Tell Us What You Need"
        text="From the first hello to final walkthrough, we’re with you every step of the way. Use the form below to connect — and let’s bring your outdoor vision to life."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text={
          <>
            <div className="contact__contact-info">
              <h2 className="contact__heading">Contact Us</h2>
              <p>
                Whether you’re ready to start a new landscaping project or just
                have a question, we’re here to help. Our team is friendly,
                responsive, and happy to chat!
              </p>
              <p className="contact__label">📞 Phone: </p>
              <p className="contact__detail">(647) 996-1001</p>

              <p className="contact__label">✉️ Email: </p>
              <p className="contact__detail">info@yourcompany.com</p>
            </div>
          </>
        }
        name="We’d Love to Hear From You"
      />
      <Gallery />
    </>
  );
};

export default ContactUsPage;
