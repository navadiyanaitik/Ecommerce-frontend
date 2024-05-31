import React from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='h-screen '>
                <div className='h-full max-w-[550px] p-5 mx-auto flex justify-center flex-col items-center'>
                    <img src='/images/check-circle.png' className='w-20 h-20 sm:w-28 sm:h-28' alt='check-icon' />
                    <h1 className='text-2xl sm:text-3xl font-semibold text-center '>Congratulations!</h1>
                    <h1 className='text-lg sm:text-2xl font-semibold text-center my-3'>Your Order has been Placed Successfully!</h1>
                    <button className='capitalize max-w-[150px] font-semibold sm:text-lg my-5 p-2 bg-stone-700 text-white w-full hover:bg-stone-900' onClick={() => { navigate('/orders') }}>View orders</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess