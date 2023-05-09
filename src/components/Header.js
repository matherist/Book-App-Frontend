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
  // use our custom hook to get the window size
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

        {/* if the width of the window is bigger than 1000px use <Navbar/>,
            else use <Hamburger/> and <SmallScreensNavbar/> */}
        {width > 1000 ? (
          <Navbar navClass="nav-big" linkClassName="nav-big-link" />
        ) : (
          <>
            <Hamburger onClick={toggleMobileMenu} isOpen={mobileMenuOpen} />
            {mobileMenuOpen && (
              <SmallScreensNavbar
              navClass={`nav-small${mobileMenuOpen ? ' mobile-menu' : ''}`}
              linkClassName="nav-small-link"
              setMobileMenuOpen={setMobileMenuOpen} // Pass setMobileMenuOpen as prop
            />
            
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
