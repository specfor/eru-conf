import Image from 'next/image';
import eruLogo from '../images/eru-logo.png';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-title">About <span className="text-primary">ERU Symposium</span></h2>
          <div className="divider"></div>
        </div>
        
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="about-logo-wrapper">
            <div className="about-logo-glow"></div>
            <Image src={eruLogo} alt="ERU logo" width={280} height={230} className="about-logo" style={{ objectFit: 'contain' }} />
          </div>
          
          <p className="about-description text-center">
            <span className="font-bold text-primary">ERU Research Symposium-2026</span> is organized as an event parallel to the University of Moratuwa Research Week in collaboration with Sri Lanka Association for the Advancement of Science (SLAAS). ERU Symposium provides an excellent opportunity for academics, industry practitioners, and students to showcase their research.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl mt-12">
            <div className="about-card">
              <div className="about-card-icon">🎓</div>
              <h3>Academics</h3>
              <p>Share cutting-edge research</p>
            </div>
            
            <div className="about-card">
              <div className="about-card-icon">🏢</div>
              <h3>Industry</h3>
              <p>Connect with innovation</p>
            </div>
            
            <div className="about-card">
              <div className="about-card-icon">👥</div>
              <h3>Students</h3>
              <p>Learn and network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
