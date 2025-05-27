import "./Review.scss";

const Review = () => {
  return (
    <section className="review">
      <div className="review__card">
        <p className="review__text">
          “Pall Landscaping completely transformed our backyard—professional, on
          time, and a pleasure to work with!”
          <br />
          <span className="review__author">— Amanda R., Mississauga</span>
        </p>
        <p className="review__area">
          Proudly serving Mississauga, Brampton, Oakville, and surrounding
          communities.
        </p>
      </div>
    </section>
  );
};

export default Review;
