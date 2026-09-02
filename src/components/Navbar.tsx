import Link from 'next/link';
import Image from 'next/image';
import uniLogo from '../images/uni-logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 logo-link">
          <Image src={uniLogo} alt="University of Moratuwa logo" style={{ width: 'auto', height: '50px', objectFit: 'cover' }} />
          <h1 className="logo-text">ERU</h1>
        </Link>
        <nav className="hidden-mobile">
          <ul className="flex items-center gap-12 nav-links">
            <li><Link href="#about">About</Link></li>
            <li><Link href="#timeline">Timeline</Link></li>
            <li><Link href="#guidelines">Guidelines</Link></li>
            <li><Link href="#awards">Awards</Link></li>
            <li><Link href="#team">Team</Link></li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button className="mobile-menu-btn hidden-md" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
          <div className="hidden-mobile">
            <button className="past-proceedings-btn">
              Past proceedings
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
