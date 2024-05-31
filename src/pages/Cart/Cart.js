import React from 'react'
import Layout from '../../component/layout/layout'
import { Icon } from '@iconify/react/dist/iconify.js'

const Cart = () => {
    return (
        <Layout>
            <div className='p-6 pb-10 md:p-10 container overflow-hidden min-h-[calc(100vh_-_88px)]'>
                <div className='overflow-auto min-h-[300px]'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='text-left p-2 bg-primary capitalize text-white'>product</th>
                                <th className='p-2 bg-primary text-left capitalize text-white'>Quantity</th>
                                <th className='text-right p-2 bg-primary capitalize text-white'>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='h-6' colSpan='3'></td>
                            </tr>
                            <tr>
                                <td className='p-2 min-w-[550px]'>
                                    <span className='inline-flex items-start'>
                                        <img src='/images/men-watch-fastrack-1.jpg' className='w-[70px] h-[70px] object-cover mr-5' alt='cart-product' />
                                        <span>
                                            <span className='block text-sm'>Apple MackBook Pro(8GB RAM,256GB SSD,33.78cm,Space Gray)</span>
                                            <span className='block text-sm'>Price:&#8377;16000</span>
                                            <span className='text-danger text-sm font-semibold cursor-pointer inline-block'>Remove</span>
                                        </span>
                                    </span>
                                </td>
                                <td className=' p-2'>
                                    <span className='inline-flex'>
                                        <button className='bg-gray-500 text-white w-8 h-8 inline-flex justify-center items-center text-xl'>
                                            <Icon icon="ic:baseline-minus" />
                                        </button>
                                        <span className='inline-flex justify-center items-center w-12 h-8'>1</span>
                                        <button className='bg-gray-500 text-white w-8 h-8 inline-flex justify-center items-center text-xl'>
                                            <Icon icon="ic:baseline-plus" />
                                        </button>
                                    </span>
                                </td>
                                <td className='text-right p-2 font-medium'>
                                    &#8377;88,120
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mt-10'>
                    <div className='flex justify-between items-center py-6 border-t-2 border-primary max-w-[340px] w-full mx-auto md:mr-0'>
                        <div className='font-medium'>Gross Total</div>
                        <div className='font-semibold text-primary'>&#8377;32,100</div>
                    </div>
                    <div className='text-center md:text-right'>
                        <button className='capitalize font-semibold text-lg p-2 bg-primary text-white max-w-[340px] w-full hover:bg-[#f9486c]'>checkout</button>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Cart