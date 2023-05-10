import React, { useState } from 'react';
import { NavComponent } from './Navbar';

const SmallScreensNavbar = ({ setMobileMenuOpen }) =>{
    let [translate, setTranslate ] = useState(true);

    const handleOnClick = () => {
        setTranslate(!translate);
        setMobileMenuOpen(prevState => !prevState);  // use the prevState to toggle the state
    }

    return(
        <div> 
             <button className="hamburger-btn" onClick={handleOnClick}></button>
             <div id="sidebar-list" className={`${translate ? 'addTransiton' : 'removeTransition'}`}>
                <NavComponent
                    navClass="nav-small"
                    linkClassName = "nav-small-link"
                    onClick = {()=>setTranslate(true)}  
                />
             </div>
        </div>
    )
}
export default SmallScreensNavbar; 
