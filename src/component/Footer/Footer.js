import React from 'react'
import { Icon } from '@iconify/react'

const Footer = () => {
    return (
        <footer className='footer-container container'>
            <div className='bg-black  py-12 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 p-5'>
                    <div className='col-span-1 lg:col-span-2'>
                        <div className='text-white text-base uppercase font-bold mb-[2vmax] pb-[15px] border-b-[#999] border-b border-solid'>support</div>
                        <ul className='text-white text-sm pl-0'>
                            <li className='mb-3'>My Profile</li>
                            <li className='mb-3'>wishlist</li>
                            <li className='mb-3'>product manuals</li>
                        </ul>
                    </div>
                    <div className='col-span-1 lg:col-span-2'>
                        <div className='text-white text-base uppercase font-bold mb-[2vmax] pb-[15px] border-b-[#999] border-b border-solid'>your links</div>
                        <ul className='text-white text-sm pl-0'>
                            <li className='mb-3'>About Us</li>
                            <li className='mb-3'>Contact Us</li>
                            <li className='mb-3'>FAQ</li>
                        </ul>
                    </div>
                    <div className='col-span-1 sm:col-span-2 lg:col-span-4'>
                        <div className='text-white text-base uppercase font-bold mb-[2vmax] pb-[15px] border-b-[#999] border-b border-solid'>contact info</div>
                        <p className='text-white mb-5'>
                            No 1123, Marmora Road, Glasgow, D04 89GR.
                            (801) 2345 - 6788 / (801) 2345 - 6789
                            support@myshop.com
                        </p>
                        <div className='mt-2 flex'>
                            <span className='inline-flex bg-black hover:bg-[#3b5998] hover:border-[#3b5998] border w-[35px] h-[35px] items-center justify-center cursor-pointer transition-all duration-[0.2s] mr-2.5 border-solid border-white'>
                                <Icon icon="ri:facebook-fill" fontSize="25px" className='text-white' />
                            </span>
                            <span className='inline-flex bg-black hover:bg-[#1DA1F2] hover:border-[#1DA1F2] border w-[35px] h-[35px] items-center justify-center cursor-pointer transition-all duration-[0.2s] mr-2.5 border-solid border-white'>
                                <Icon icon="uil:twitter" fontSize="25px" className='text-white' />
                            </span>
                            <span className='inline-flex bg-black hover:bg-[#1DB954] hover:border-[#1DB954] border w-[35px] h-[35px] items-center justify-center cursor-pointer transition-all duration-[0.2s] mr-2.5 border-solid border-white'>
                                <Icon icon="ooui:network" fontSize="25px" className='text-white' />
                            </span>
                            <span className='inline-flex bg-black hover:bg-[#F4B400] hover:border-[#F4B400] border w-[35px] h-[35px] items-center justify-center cursor-pointer transition-all duration-[0.2s] mr-2.5 border-solid border-white'>
                                <Icon icon="mdi:google-plus" fontSize="25px" className='text-white' />
                            </span>
                            <span className='inline-flex bg-black hover:bg-[#E60023] hover:border-[#E60023] border w-[35px] h-[35px] items-center justify-center cursor-pointer transition-all duration-[0.2s] mr-2.5 border-solid border-white'>
                                <Icon icon="ri:pinterest-fill" fontSize="25px" className='text-white' />
                            </span>
                        </div>
                    </div>
                    <div className='col-span-1 sm:col-span-2 lg:col-span-4'>
                        <div className='text-white text-base uppercase font-bold mb-[2vmax] pb-[15px] border-b-[#999] border-b border-solid'>newsletter</div>
                        <p className='text-white mb-5'>
                            Get all the best deals, sales and offers from the best online shopping store in UAE. Sign up now !
                        </p>
                        <form>
                            <div className='flex flex-col sm:flex-row items-center h-12'>
                                <input type='text' className='border-none outline-none py-2.5 h-full w-[175px] sm:w-auto' />
                                <button className='bg-[#FF6A88] mt-4 sm:mt-0 text-sm  text-white uppercase sm:text-base font-extrabold h-full p-2.5 border-[none]'>subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer