import React, { useState, useEffect } from "react";

const sliderImages: string[] = [
  "https://shoplane-by-lassie.netlify.app/img/img4.png",
  // Add more slides as needed...
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="offer-slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderImages.map((image) => (
          <div className="slide">
            <div className="slide-content">
              <img src={image} alt="Special offer" />
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {sliderImages.map((_, index) => (
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
