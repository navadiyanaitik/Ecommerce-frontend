import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import SelectField from '../../component/SelectField/SelectField'
import Popup from '../../component/Modal/Modal'

const roles = [
    { id: 1, name: 'User' },
    { id: 2, name: 'Admin' },
]

const UpdateProfile = ({ open, closeModal }) => {
    const [file, setFile] = useState();

    const handleProfileUpload = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }


    return (
        <Popup open={open} closeModal={closeModal} title='submit review'>
            <div>
                <h1 className=' font-semibold text-xl mb-3 text-center'>Update Profile</h1>

                <form className='mt-10'>
                    <div>
                        <div className='relative w-36 h-36 mx-auto group justify-center mb-10'>
                            <img src={file ? file : '/images/user-profile-dark.png'} alt='user-icon' className='w-full h-full rounded-full object-cover' />
                            <label htmlFor='upload-profile' className='absolute inset-0 opacity-0 group-hover:opacity-100 bg-stone-900/30 cursor-pointer transition-all duration-150 rounded-full flex items-center justify-center'>
                                <Icon icon="material-symbols:upload" className='text-white text-4xl' />
                            </label>
                            <input type='file' id='upload-profile' hidden onChange={(e) => { handleProfileUpload(e) }} />
                        </div>
                        <div className='flex h-12 border border-gray-400 mb-5'>
                            <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                                <Icon icon="mdi:user" className='text-2xl text-gray-500' />
                            </div>
                            <input className='h-full flex-grow outline-none p-2' placeholder='Name' />
                        </div>
                        <div className='flex h-12 border border-gray-400 mb-5'>
                            <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                                <Icon icon="ic:baseline-email" className='text-2xl text-gray-500' />
                            </div>
                            <input type='email' className='h-full flex-grow outline-none p-2' placeholder='Email' />
                        </div>


                        <button className='capitalize font-semibold text-lg my-5 p-2 bg-primary text-white w-full hover:bg-[#f9486c]'>Update</button>

                    </div>
                </form>
            </div>
        </Popup>
    )
}

export default UpdateProfile