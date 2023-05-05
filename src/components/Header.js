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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <Hamburger onClick={toggleMenu} isOpen={isOpen} />
            {isOpen && (
              <SmallScreensNavbar
                navClass="nav-small"
                linkClassName="nav-small-link"
              />
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
