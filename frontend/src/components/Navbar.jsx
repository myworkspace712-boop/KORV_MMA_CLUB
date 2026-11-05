import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('korv_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('korv_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">KORV <span>MMA CLUB</span></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/sports" className={location.pathname === '/sports' || location.pathname === '/mma' ? 'active' : ''}>Sports</Link></li>
        <li>
          <button 
            type="button" 
            onClick={toggleTheme} 
            className="theme-toggle-btn"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            aria-label="Toggle color theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
