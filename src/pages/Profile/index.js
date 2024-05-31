import React, { useState } from 'react'
import Layout from '../../component/layout/layout'
import UpdateUserModal from '../Dashboard/Users/UpdateUserModal'
import UpdateProfile from './UpdateProfile';

const Profile = () => {
    const [open, setOpen] = useState(false);
    const handleCloseModal = () => {
        setOpen(false)
    }
    return (
        <React.Fragment>
            <Layout>
                <div className='container p-10 pt-0'>
                    <h1 className='text-3xl font-semibold capitalize mt-5 mb-10 text-center'>My Profile</h1>
                    <div className='flex flex-col lg:flex-row items-start'>
                        <div className='w-full lg:w-1/2 flex flex-col items-center'>
                            <div className=' flex items-center justify-center text-center  w-40 h-40 xs:w-52 xs:h-52 sm:w-72 sm:h-72'>
                                <img src='/images/profile.jpeg' className='w-full h-full rounded-full' />
                            </div>
                            <div className='flex justify-center items-center mt-10'>
                                <button className='capitalize font-semibold text-lg  p-2 bg-primary max-w-48 text-white w-full hover:bg-[#f9486c]' onClick={() => { setOpen(!open) }}>Change Profile</button>
                            </div>
                        </div>
                        <div className='w-full lg:w-1/2 mt-10 lg:mt-0'>
                            <div className='max-w-[450px] mx-auto'>
                                <div className='mb-12'>
                                    <div className=' mb-3 text-sm sm:text-base'>
                                        <div className='text-xl font-semibold'>Full Name</div>
                                        <p className='text-gray-500'>Abhishek Sharma</p>
                                    </div>
                                </div>
                                <div class="mb-12">
                                    <div className='text-sm sm:text-base'>
                                        <div className='text-xl font-semibold'>Email</div>
                                        <p className='text-gray-500 mt-2 sm:mt-0'>abhisheksharma1985@gmail.com</p>
                                    </div>
                                </div>
                                <div className='mb-12'>
                                    <div className='text-xl font-semibold'>Joined On</div>
                                    <p className='text-gray-500 mt-2 sm:mt-0'>2024-05-21</p>
                                </div>
                                <div>
                                    <button className='capitalize font-semibold text-lg my-5 p-2 bg-stone-400 text-white w-full hover:bg-stone-500'>My Orders</button>
                                    <button className='capitalize font-semibold text-lg  p-2 bg-stone-400 text-white w-full hover:bg-stone-500'>Change Password</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <UpdateProfile open={open} closeModal={handleCloseModal} />

        </React.Fragment>
    )
}

export default Profile