import React from 'react';
import './Navbar.css';
import { Icon } from '@iconify/react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-wrapper'>
                <div className='nav-logo'>Fashion Hub</div>
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className='nav-right'>
                    <div className='auth-link'>
                        <Icon icon="ic:baseline-account-circle" className='account-icon' />
                        <span>Log In</span>
                    </div>
                    <div>
                        <Icon icon="bi:bag-heart-fill" className='cart-icon' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar