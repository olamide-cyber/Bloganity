import React from "react";
import './NavBar.scss'
import Burger from "./Burger";
import RightNav from "./RightNav";

function NavBar() {
    return (
        <nav className='nav-bar'>
            <div>Bloganity</div>
            <div className="burger">
                <Burger />
            </div>
            <RightNav className="nav-bar-right-nav" />
        </nav>
    )
}

export default NavBar;