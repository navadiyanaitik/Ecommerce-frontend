import React, { useState } from 'react'
import Layout from '../../component/layout/layout'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

const Signup = () => {
    const [file, setFile] = useState();

    const handleProfileUpload = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }
    return (
        <Layout>
            <div className='bg-white h-[calc(100vh_-_60px)] sm:h-[calc(100vh_-_88px)]'>
                <div className='h-full bg-primary sm:bg-white flex items-center justify-center'>
                    <div className='w-[45%] pl-5 h-full hidden sm:flex items-center justify-end bg-white'>
                        <div className='h-[490px] max-w-[300px] w-full bg-primary flex flex-col items-center justify-center'>
                            <div className='relative group'>
                                <img src={file ? file : '/images/user-profile.png'} alt='user-icon' className='w-28 h-28 rounded-full object-cover' />
                                <label htmlFor='upload-profile' className='absolute inset-0 opacity-0 group-hover:opacity-100 bg-stone-900/30 cursor-pointer transition-all duration-150 rounded-full flex items-center justify-center'>
                                    <Icon icon="material-symbols:upload" className='text-white text-4xl' />
                                </label>
                                <input type='file' id='upload-profile' hidden onChange={(e) => { handleProfileUpload(e) }} />
                            </div>
                            <p className='text-white text-xs'>No image selected</p>
                        </div>
                    </div>
                    <div className='w-full sm:w-[55%] h-full bg-primary flex justify-center sm:justify-start items-center p-5 sm:p-0 sm:pr-5'>
                        <div className='p-8 pb-10 bg-white max-w-96 w-full rounded-xl sm:rounded-none'>
                            <h1 className='uppercase text-primary font-bold text-2xl text-center mb-8'>Sign up</h1>
                            <div className='mb-4'>
                                <input className='h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-400' placeholder='username' />
                                <p className='mt-1.5 text-xs ps-1 text-danger opacity-0'>Username is required</p>
                            </div>
                            <div className='mb-4'>
                                <input className='h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-400' placeholder='email' />
                                <p className='mt-1.5 text-xs ps-1 text-danger opacity-0'>Email is required</p>
                            </div>
                            <div className='mb-6'>
                                <input className='h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-400' placeholder='password' />
                                <p className='mt-1.5 text-xs ps-1 text-danger opacity-0'>password required</p>
                            </div>
                            <div class="text-center">
                                <button className='px-3 py-2 max-w-28 w-full mx-auto h-12 bg-primary font-medium hover:bg-[#f9486c] rounded-sm text-white uppercase'>submit</button>
                            </div>
                            <div className='text-sm text-center mt-5'>All ready have an account? <Link to={'/login'} className='text-primary font-bold cursor-pointer'>Sign In <Icon icon="iconamoon:arrow-top-right-1" /> </Link></div>

                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Signup