import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {
    return (
        <div className='fixed h-20 border-b border-stone-500 inset-x-0 top-0 w-full bg-white z-20'>
            <div className='flex justify-between items-center h-full p-5'>
                <h1>
                    <Link to={'/'} className='nav-logo font-medium text-2xl sm:text-3xl text-primary cursor-pointer'>Fashion Hub</Link>
                </h1>
                <div>
                    <h1 className='text-3xl font-semibold capitalize'>{title}</h1>
                </div>
                <div className='flex items-center'>
                    <img src='/images/profile.jpeg' className='w-10 h-10 rounded-full mr-2 cursor-pointer' alt='profile' />
                </div>
            </div>
        </div>
    )
}

export default Navbar