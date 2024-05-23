import React, { useState } from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react';
import Popover from '../Popover/Popover';

const Sidebar = ({ open, setOpen }) => {

    const location = useLocation();
    const path = location.pathname;



    return (
        <>
            <div className={`fixed bg-white ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 inset-y-0 left-0 w-auto z-50`}>
                <div className="d-flex flex-column flex-shrink-0 p-3 sm:p-5 h-full bg-body-tertiary" style={{ width: '280px' }}>
                    <div className='nav-logo font-medium text-2xl text-primary leading-[36px] px-0.5 sm:py-2.5'>Fashion Hub</div>
                    <hr className='my-2 mt-2.5' />
                    <div className="h-[calc(100%_-_48px)]  overflow-auto flex flex-col justify-between">
                        <ul >
                            <li className='py-1'>
                                <Link to="/" className={`${path === '/' ? 'text-primary font-semibold' : ' text-black text-opacity-70'} my-1.5 block`} aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className='py-1'>
                                <Link to="/product" className={`${path === '/product' ? 'text-primary font-semibold' : ' text-black text-opacity-70'} my-1.5 block`}>
                                    Product
                                </Link>
                            </li>
                            <li className='py-1'>
                                <Link to="#" className={`${path === '/contact' ? 'text-primary font-semibold' : ' text-black text-opacity-70'} my-1.5 block`}>
                                    Contact
                                </Link>
                            </li>
                            <li className='py-1'>
                                <Link to="#" className={`${path === '/about' ? 'text-primary font-semibold' : ' text-black text-opacity-70'} my-1.5 block`}>
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <hr className='mb-5' />
                            <Popover
                                buttonContent={
                                    <div className='flex items-center'>
                                        <img src='/images/profile.jpeg' className='w-10 h-10 rounded-full mr-2' />
                                        <Icon icon="icon-park-solid:down-one" className='text-lg text-gray-500' />
                                    </div>
                                }
                                className='max-w-[120px] w-full'
                            >
                                <div className='bg-white border p-1.5 border-blue shadow-sm rounded-lg max-w-[180px] w-full'>
                                    <ul>
                                        <li className='mb-1'>
                                            <Link className='text-sm p-1 hover:text-blue rounded-sm font-medium block'>Profile</Link>
                                        </li>
                                        <li>
                                            <Link className='text-sm p-1 hover:text-danger rounded-sm font-medium block'>logout</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Popover>
                        </div>

                    </div>
                </div>
            </div>
            {
                open &&
                <div className={`fixed inset-0 z-30 bg-black bg-opacity-50`} onClick={() => { setOpen(false) }} />
            }
        </>
    )
}

export default Sidebar