import React, { useState, useEffect } from "react";
import img1 from "./img/DSC_1.JPG";
import img2 from "./img/DSC_2.JPG";
import img3 from "./img/DSC_6.JPG";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showText, setShowText] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    setShowText(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
    setShowText(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full relative">
      <div
        id="default-carousel"
        className="relative overflow-hidden w-full"
        data-carousel="static"
      >
        <div
          className="relative h-96 md:h-96 overflow-hidden"
          data-carousel-inner
        >
          {[img1, img2, img3].map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
            >
              <div
                className="w-full h-full bg-cover bg-center drop-shadow-sm"
                style={{ backgroundImage: `url(${image})` }}
              />
              {showText && index === currentSlide && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="text-white px-6 py-8 rounded-lg text-center">
                    <h2 className="text-3xl font-semibold mb-4">
                      Trusted Accounting Services
                    </h2>
                    <p className="text-lg leading-relaxed">
                      Welcome to Finactaxpro, your trusted partner for all your
                      accounting needs. We offer comprehensive financial
                      solutions tailored to your specific requirements. With
                      decades of experience and a dedication to excellence, your
                      finances are in capable hands with us.
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
          data-carousel-indicators
        >
          {[...Array(3).keys()].map((indicator, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition ${
                index === currentSlide ? "bg-gray-400" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-prev
          onClick={prevSlide}
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
          data-carousel-next
          onClick={nextSlide}
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
