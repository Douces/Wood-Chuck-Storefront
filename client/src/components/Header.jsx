import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="site-title">Wood Chuck</div>

      <nav className="site-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/request">Request a Project</NavLink>
      </nav>

      <div className="header-account" aria-label="Account"></div>
    </header>
  );
}

export default Header;