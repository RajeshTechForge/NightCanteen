import React, { useState, useEffect } from "react";
import { OfferSlide } from "../types/types";

const offerSlides: OfferSlide[] = [
  {
    id: 1,
    brand: "PUMA",
    title: "FLAT 30% Offer",
    description: "MEN'S SHIRT",
    image: "https://shoplane-by-lassie.netlify.app/img/img4.png",
  },
  // Add more slides as needed
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offerSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="offer-slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {offerSlides.map((slide) => (
          <div key={slide.id} className="slide">
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} />
              <div className="slide-info">
                <h2>{slide.brand}</h2>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {offerSlides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
