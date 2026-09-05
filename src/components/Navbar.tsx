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
      </div>
    </header>
  );
}
