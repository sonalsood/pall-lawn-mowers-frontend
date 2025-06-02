import Hero from "../../components/Hero/Hero";
import Review from "../../components/Review/Review";
import DetailedService from "../../components/DetailedService/DetailedService";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Industries from "../../components/Industries/Industries";
import commercialHeroImg from "../../assets/images/lawn_3.jpg";

const CommercialLawnCarePage = ({ onGetQuoteClick }) => {
  return (
    <>
      <Hero
        image={commercialHeroImg}
        title="Professional Lawn Care for Your Commercial Property"
        text="Keep your business looking sharp with reliable, scheduled lawn maintenance tailored to commercial needs."
        onGetQuoteClick={onGetQuoteClick}
      />
      <Review
        text="“We've been using Pall Landscaping to maintain the grounds at our office complex, and the results speak for themselves. The lawn is always immaculate, the team is punctual and professional, and our customers constantly compliment how well-kept the property looks. It’s more than just curb appeal — it’s a great first impression for our business.”"
        name="Jessica M., Property Manager, Mississauga"
      />
      <DetailedService />
      <WhyChooseUs />
      <Industries />
    </>
  );
};

export default CommercialLawnCarePage;
