import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='h-screen '>
                <div className='h-full max-w-[550px] p-5 mx-auto flex justify-center flex-col items-center'>
                    <img src='/images/warning.png' className='w-20 h-20 sm:w-28 sm:h-28' alt='warning' />
                    <h1 className='text-lg sm:text-2xl font-semibold text-center my-3'>Oops! Page Not Found</h1>
                    <button className='capitalize max-w-[150px] font-semibold sm:text-lg my-5 p-2 bg-stone-700 text-white w-full hover:bg-stone-900' onClick={() => { navigate('/') }}>Home</button>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound