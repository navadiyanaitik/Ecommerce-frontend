import React, { useState } from 'react';
import './Navbar.css';
import { Icon } from '@iconify/react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <nav className='bg-white p-2 sm:p-5'>
                <div className='container mx-auto h-full'>
                    <div className='nav-wrapper flex items-center justify-between p-1.5 h-full'>
                        <div className='nav-logo font-medium text-2xl sm:text-3xl text-primary cursor-pointer' onClick={() => { navigate('/') }}>Fashion Hub</div>
                        <div className='nav-items hidden md:block '>
                            <ul className='m-0 p-0 flex items-center'>
                                <li>
                                    <Link to={'/'} className={`page-link ${path === '/' ? 'text-primary text-opacity-100' : 'text-black'} cursor-pointer relative  text-opacity-70 font-medium no-underline mx-2.5 hover:text-primary`}>Home</Link></li>
                                <li>
                                    <Link to={'/product'} className={`page-link  ${path === '/product' ? 'text-primary text-opacity-100' : 'text-black'} cursor-pointer relative  text-black text-opacity-70 font-medium no-underline mx-2.5 hover:text-primary`}>Product</Link>
                                </li>
                                <li><Link to={'#'} className={`page-link  ${path === '/contact' ? 'text-primary text-opacity-100' : 'text-black'} cursor-pointer relative  text-black text-opacity-70 font-medium no-underline mx-2.5 hover:text-primary`}>Contact</Link></li>
                                <li><Link to={'#'} className={`page-link  ${path === '/about' ? 'text-primary text-opacity-100' : 'text-black'} cursor-pointer relative  text-black text-opacity-70 font-medium no-underline mx-2.5 hover:text-primary`}>About</Link></li>
                            </ul>
                        </div>
                        <div className='hidden md:flex items-center'>
                            <div className='flex items-center cursor-pointer mr-2.5'>
                                <Icon icon="ic:baseline-account-circle" className='text-3xl mr-2.5' />
                                <span>Log In</span>
                            </div>
                            <div>
                                <Icon icon="bi:bag-heart-fill" className='text-2xl ml-2.5 cursor-pointer text-primary' />
                            </div>
                        </div>
                        <div className='md:hidden'>
                            <Icon icon="charm:menu-hamburger" fontSize="25px" className='cursor-pointer' color='#FF6A88' onClick={() => { setOpen(!open) }} />
                        </div>
                    </div>
                </div>
            </nav>
            <Sidebar open={open} setOpen={setOpen} />
        </>
    )
}

export default Navbar