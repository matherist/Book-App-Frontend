import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-scroll';
import SmallScreensNavbar from './SmallScreensNavbar';
import { useWindowWidthAndHeight } from './CustomHooks';

const Hamburger = ({ onClick, isOpen }) => {
  return (
    <button
      className={`hamburger-btn${isOpen ? ' open' : ''}`}
      onClick={onClick}
    >
      &#9776;
    </button>
  );
};

const Header = () => {
  const [width] = useWindowWidthAndHeight();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    if (width <= 1000) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="Home" smooth={true} className="logo nav-link">
          <img
            src="https://simg.nicepng.com/png/small/251-2515797_no-circle-book-book-logo-png.png"
            alt="logo"
            style={{ width: '60px' }}
          />
        </Link>

        {width > 768 ? (
          <Navbar navClass="nav-big" linkClassName="nav-big-link" />
        ) : (
          <>
            <Hamburger onClick={toggleMobileMenu} isOpen={mobileMenuOpen} />
            {mobileMenuOpen && (
              <SmallScreensNavbar
              navClass={`nav-small${mobileMenuOpen ? ' mobile-menu' : ''}`}
              linkClassName="nav-small-link"
              setMobileMenuOpen={setMobileMenuOpen} 
            />
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
