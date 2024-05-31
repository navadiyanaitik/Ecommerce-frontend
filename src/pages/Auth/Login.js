import React from 'react'
import Layout from '../../component/layout/layout'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react/dist/iconify.js'

const Login = () => {
    return (
        <Layout>
            <div className='bg-white h-[calc(100vh_-_60px)] sm:h-[calc(100vh_-_88px)]'>
                <div className='h-full bg-primary sm:bg-white flex items-center justify-center'>
                    <div className='w-[45%] pl-5 h-full hidden sm:flex items-center justify-end bg-white'>
                        <div className='h-[430px] max-w-[300px] w-full bg-primary flex items-center justify-center'>
                            <img src='/images/login.png' className='w-28' alt='login' />
                        </div>
                    </div>
                    <div className='w-full sm:w-[55%] h-full bg-primary flex justify-center sm:justify-start items-center p-5 sm:p-0 sm:pr-5'>
                        <div className='p-8 pb-10 bg-white max-w-96 w-full rounded-xl sm:rounded-none'>
                            <h1 className='uppercase text-primary font-bold text-2xl text-center mb-8'>Sign In</h1>
                            <div className='mb-4'>
                                <input className='h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-400' placeholder='email' />
                                <p className='mt-1.5 text-xs ps-1 text-danger opacity-0'>Invalid email entered</p>
                            </div>
                            <div className='mb-6'>
                                <input className='h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-400' placeholder='password' />
                            </div>
                            <Link to={'#'} className='text-primary font-semibold hover:underline block text-right mb-6'>Forgot password?</Link>
                            <div class="text-center">
                                <button className='px-3 py-2 max-w-28 w-full mx-auto h-12 bg-primary font-medium hover:bg-[#f9486c] rounded-sm text-white uppercase'>Sign In</button>
                            </div>
                            <div className='text-sm text-center mt-5'>Not registered yet? <Link to={'/signup'} className='text-primary font-bold cursor-pointer'>Create an account <Icon icon="iconamoon:arrow-top-right-1" /> </Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Login