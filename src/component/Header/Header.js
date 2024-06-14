import React from 'react';
import './Header.css';
import { Icon } from '@iconify/react/dist/iconify.js';


const Header = () => {
    return (
        <div className='header-wrapper h-screen bg-[#FF9A8B] relative'>
            <div className='container h-full'>
                <div className='mx-auto h-full'>
                    <div className='px-5 banner flex flex-col justify-center items-center h-[90%]'>
                        <p className='text-white font-light text-lg text-center'>Wellcome to Ecommerce</p>
                        <h1 className='text-white  mb-9 font-semibold text-xl sm:text-2xl md:text-3xl text-center'>FIND AMAZING PRODUCTS BELOW</h1>
                        <a href='#products' className='scroll-btn'>
                            <button className='text-black border bg-white text-sm font-semibold cursor-pointer transition-all duration-[0.5s] flex items-center justify-center w-[100px] p-3.5 border-solid border-white hover:bg-primary hover:text-white'>
                                Scroll
                                <Icon icon="solar:mouse-outline" className='mouseIcon ml-2 text-lg' />
                            </button>
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header