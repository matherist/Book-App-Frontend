import React, { useState } from 'react';
import { NavComponent } from './Navbar';

const SmallScreensNavbar = (setMobileMenuOpen ) =>{
    // declare 'translate' as a state variable
    let [translate, setTranslate ] = useState(true);
    return(
        <div> 
             <button className="hamburger-btn" onClick={() => {
                setTranslate(!translate);
                 setMobileMenuOpen(false);
            }}></button>
             {/*hide and show the sidebar list based on whether translate is true or false*/}
             <div id="sidebar-list" style={{ display: setMobileMenuOpen ? 'flex' : 'none' }} className={`${translate ? 'addTransiton' : 'removeTransition'}`}>
                <NavComponent
                    navClass="nav-small"
                    linkClassName = "nav-small-link"
                    onClick = {()=>setTranslate(true)}  //set translate to true to hide the sidebar list
                />
             </div>
        </div>
    )
}
export default SmallScreensNavbar;
