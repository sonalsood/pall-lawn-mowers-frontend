import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.scss";
import photo_1 from "../../assets/gallery/photo_1.jpg";
import photo_2 from "../../assets/gallery/photo_2.jpg";
import photo_3 from "../../assets/gallery/photo_3.jpg";
import photo_4 from "../../assets/gallery/photo_4.jpg";
import photo_5 from "../../assets/gallery/photo_5.jpg";
import photo_6 from "../../assets/gallery/photo_6.jpg";
import photo_7 from "../../assets/gallery/photo_7.jpg";
import photo_8 from "../../assets/gallery/photo_8.jpg";
import photo_9 from "../../assets/gallery/photo_9.jpg";
import photo_10 from "../../assets/gallery/photo_10.jpg";
import photo_11 from "../../assets/gallery/photo_11.jpg";
import photo_12 from "../../assets/gallery/photo_12.jpg";
import photo_13 from "../../assets/gallery/photo_13.jpg";
import photo_14 from "../../assets/gallery/photo_14.jpg";
import photo_15 from "../../assets/gallery/photo_15.jpg";
import photo_16 from "../../assets/gallery/photo_16.jpg";
import photo_17 from "../../assets/gallery/photo_17.jpg";
import photo_18 from "../../assets/gallery/photo_18.jpg";
import photo_19 from "../../assets/gallery/photo_19.jpg";
import photo_20 from "../../assets/gallery/photo_20.jpg";

const images = [
  photo_1,
  photo_2,
  photo_3,
  photo_4,
  photo_5,
  photo_6,
  photo_7,
  photo_8,
  photo_9,
  photo_10,
  photo_11,
  photo_12,
  photo_13,
  photo_14,
  photo_15,
  photo_16,
  photo_17,
  photo_18,
  photo_19,
  photo_20,
];

const INITIAL_VISIBLE = 10;

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? images : images.slice(0, INITIAL_VISIBLE);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">
          Pall Projects: See Our Services In Bloom
        </h2>
        <div className="gallery-grid">
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => {
                setPhotoIndex(images.indexOf(src));
                setIsOpen(true);
              }}
            >
              <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        {images.length > INITIAL_VISIBLE && (
          <div className="gallery-toggle">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="see-more-btn"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={photoIndex}
        on={{ view: ({ index }) => setPhotoIndex(index) }}
      />
    </section>
  );
};

export default Gallery;
