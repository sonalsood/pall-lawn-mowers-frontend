import "./Review.scss";

const Review = ({ text, name }) => {
  return (
    <section className="review">
      <div className="review__card">
        <p className="review__text">
          {text}
          <br />
          <span className="review__author">— {name}</span>
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
