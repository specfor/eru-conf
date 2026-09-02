import Link from 'next/link';
import Image from 'next/image';
import uniLogo from '../images/uni-logo.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 footer-grid">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="footer-logo-box">
                <Image src={uniLogo} alt="ERU symposium 2025" style={{ width: 'auto', height: '80px', objectFit: 'cover' }} />
              </div>
              <h2 className="footer-title">ERU Symposium</h2>
            </div>
            <p className="footer-desc">
              Engineering Research Unit (ERU) of the University of Moratuwa was set up in the late 80s with a view to disseminate the knowledge gained through research carried out at the Faculty of Engineering to the Scientific Community at large.
            </p>
          </div>
          
          <div className="footer-links-col">
            <h3 className="footer-heading text-accent">Quick Links</h3>
            <ul className="footer-links-list">
              <li><Link href="#about">→ About</Link></li>
              <li><Link href="#timeline">→ Timeline</Link></li>
              <li><Link href="#guidelines">→ Guidelines</Link></li>
              <li><Link href="#awards">→ Awards</Link></li>
              <li><Link href="#team">→ Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="footer-heading text-accent">Contact Us</h3>
            <div className="footer-contact-list">
              <p><span>📍</span> <span>Engineering Research Unit (ERU)<br/>Faculty of Engineering<br/>University of Moratuwa<br/>Katubedda, Moratuwa, Sri Lanka</span></p>
              <p><span>📧</span> amantham@uom.lk</p>
              <p><span>📞</span> +94 11 265 0301 (Ext: 4531)</p>
              <p><span>📱</span> +94 71 267 7220 (Amantha)</p>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center footer-bottom">
          <p>© 2025 ERU Symposium. All rights reserved.</p>
          <p>Designed &amp; Developed with ❤️ by Anushka Subasinghe</p>
        </div>
      </div>
    </footer>
  );
}
