import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container relative h-full flex flex-col justify-center items-center">
        <div className="animate-fade-in-up text-center">
          <h1 className="hero-title">
            ERU <span className="hero-highlight animate-pulse">Symposium</span> 2025
          </h1>
          <p className="hero-description">
            ERU Symposium, organized by Faculty of Engineering, University of Moratuwa, provides a platform for researchers to showcase their latest research and innovations. The symposium brings academics, industry professionals, and students together for knowledge sharing and future collaboration.
          </p>
          <div className="hero-date-badge">
            📅 December 11, 2025 | 📍 University of Moratuwa
          </div>
          <div className="mt-10">
            <a href="#about" className="btn btn-hero">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
