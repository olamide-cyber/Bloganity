import React from "react";
import './RightNav.scss'

function  RightNav( props: {className?: string} ) {
    return (
        <ul className={'right-nav ' + props.className}>
            <li><a href='#'>About us</a></li> 
            <li><a href='#'>How it works</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Sign in</a></li>
            <li><a href='#'>Sign up</a></li>
        </ul>
    )
}

export default RightNav