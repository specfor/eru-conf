"use client";

import { useState, useEffect } from 'react';
import './Gallery.css';

export default function Gallery() {
  const images = [
    "https://placehold.co/1200x600/450a0a/fff?text=Symposium+Gallery+1",
    "https://placehold.co/1200x600/ca8a04/fff?text=Symposium+Gallery+2",
    "https://placehold.co/1200x600/111827/fff?text=Symposium+Gallery+3",
    "https://placehold.co/1200x600/7f1d1d/fff?text=Symposium+Gallery+4"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="gallery" className="section section-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-title">Past <span className="text-primary">Memories</span></h2>
          <div className="divider"></div>
          <p className="heading-subtitle">Glimpses from previous ERU symposiums</p>
        </div>

        <div className="gallery-slider-container max-w-5xl mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className={`gallery-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={img} alt={`Gallery slide ${index + 1}`} className="gallery-img" />
            </div>
          ))}
          
          <div className="gallery-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`gallery-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
