import React from 'react';
import './BlogAppLogin.scss';
import subject from './subject1.png'
import instagramLogo from './instagramLogo.svg'
import twittwerLogo from './twitterLogo.svg'
import facebookLogo from './facebookLogo.svg'
import NavBar from './NavBar/NavBar';

function BlogAppLogin() {
    return (
        <div className='login'>
            <NavBar />
            <div className='login-body'>
                <div className='login-body-left'>
                    <h1>Create  <br/> a unique and  <br/> beautiful blog</h1>
                    <p>There's no other place that combines such an excellent level of writing with a truly engaged and active community. Bloganity is truly where ideas are born, shared, and spread.</p>
                    <button>Get Started</button>
                    <div className='login-social-handle'>
                        <img alt='insta-handle' src={instagramLogo}/>
                        <img alt='twittter-handle' src={twittwerLogo}/>
                        <img alt='facebook-handle' src={facebookLogo} />
                    </div>
                </div>
                <div className='login-body-right'>
                    <img alt='subject1' src={subject} />
                </div>
            </div>
        </div>
    );
}

export default BlogAppLogin;
