"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from '../images/gallery/DSC_0071.webp';
import img2 from '../images/gallery/DSC_0147.webp';
import img3 from '../images/gallery/DSC_0193.webp';
import img4 from '../images/gallery/DSC_0229.webp';
import img5 from '../images/gallery/DSC_0257.webp';
import img6 from '../images/gallery/_MG_0533.webp';
import img7 from '../images/gallery/_MG_0540.webp';
import img8 from '../images/gallery/_MG_0608.webp';
import img9 from '../images/gallery/_MG_0619.webp';
import img10 from '../images/gallery/_MG_0741.webp';
import img11 from '../images/gallery/_MG_0830.webp';
import img12 from '../images/gallery/_MG_0839.webp';
import './Gallery.css';

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

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
              <Image src={img} alt={`Gallery slide ${index + 1}`} fill style={{ objectFit: 'cover' }} priority={index === 0} />
            </div>
          ))}
        </div>
        
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
    </section>
  );
}
