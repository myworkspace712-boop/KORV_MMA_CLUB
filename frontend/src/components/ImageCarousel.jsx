import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageCarousel.css';

function ImageCarousel() {
  const slides = [
    {
      img: '/MMA/image4.jpeg',
      heading: "WHERE POWER\nMEETS\nSKILLS."
    },
    {
      img: '/MMA/image7.jpeg',
      heading: "YOUR FIGHT.\nYOUR SPACE.\nYOUR GOALS."
    }
  ];

  const tickers = [
    "STRIKE. REPEAT.",
    "GRAPPLE. SUBMIT.",
    "PUSH YOUR LIMITS.",
    "DIG DEEPER."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="carousel-container">
      <div 
        className="carousel-track" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.img} alt={`KORV MMA Athlete ${index + 1}`} />
            
            {/* Clean cinematic dark vignette */}
            <div className="carousel-vignette"></div>

            <div className="hero-overlay">
              {/* Small text above large headline */}
              <div className="hero-ticker-column">
                <div className="hero-tickers">
                  {tickers.map((ticker, tIdx) => (
                    <span key={tIdx} className="hero-ticker-item">{ticker}</span>
                  ))}
                </div>
              </div>

              <h1 className="hero-headline">{slide.heading}</h1>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="carousel-arrow left-arrow" 
        onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>
      <button 
        className="carousel-arrow right-arrow" 
        onClick={() => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </button>

      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            title={`Slide ${idx + 1}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
