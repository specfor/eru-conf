import Image from 'next/image';
import heroBg from '../images/eru-hero-back.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <Image src={heroBg} alt="ERU Symposium Hero Background" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
      <div className="hero-overlay"></div>
      <div className="container relative h-full flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="hero-title animate-fade-in-up delay-100">
            ERU <span className="hero-highlight animate-pulse">Symposium</span> 2025
          </h1>
          <p className="hero-description animate-fade-in-up delay-300">
            ERU Symposium, organized by Faculty of Engineering, University of Moratuwa, provides a platform for researchers to showcase their latest research and innovations. The symposium brings academics, industry professionals, and students together for knowledge sharing and future collaboration.
          </p>
          <div className="hero-date-badge animate-fade-in-up delay-500">
            📅 December 11, 2025 | 📍 University of Moratuwa
          </div>
          <div className="mt-10 animate-fade-in-up delay-500">
            <a href="#about" className="btn btn-hero">Learn More</a>
          </div>
        </div>
      </div>
      
      <a href="#about" className="scroll-indicator animate-fade-in-up delay-500" aria-label="Scroll down">
        <span>Scroll</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </a>
    </section>
  );
}
