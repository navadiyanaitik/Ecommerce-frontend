import React from 'react'

const ConfirmOrder = ({ goToNextStep }) => {
    return (
        <div className='flex flex-col md:flex-row items-start'>
            <div className='w-full md:w-3/5 lg:w-2/3 md:border-r border-stone-300 px-5 sm:px-10 pb-10'>
                <div className='mb-12'>
                    <h1 className='text-2xl sm:text-3xl font-semibold capitalize mb-10'>shipping info</h1>
                    <div className='flex items-center mb-3 text-sm sm:text-base'>
                        <div className='w-[120px] mr-2'>Name:</div>
                        <p className='text-gray-500'>John Boi</p>
                    </div>
                    <div className='flex items-center mb-3 text-sm sm:text-base'>
                        <div className='w-[120px] mr-2'>Phone:</div>
                        <p className='text-gray-500'>9876543210</p>
                    </div>
                    <div className='flex flex-col sm:flex-row sm:items-center text-sm sm:text-base'>
                        <div className='w-[120px] mr-2'>Address:</div>
                        <p className='text-gray-500 mt-2 sm:mt-0'>h-77 doc op, los angles,USA,465011,USA</p>
                    </div>
                </div>
                <div className='mb-5'>
                    <h1 className='text-2xl sm:text-3xl font-semibold capitalize mb-10'>your cart items:</h1>
                    <div className='overflow-auto'>
                        <table className='w-full'>
                            <tbody>
                                <tr>
                                    <td className='p-2 min-w-[550px]'>
                                        <span className='inline-flex items-center'>
                                            <img src='/images/men-watch-fastrack-1.jpg' alt='product' className='w-[70px] h-[70px] object-cover mr-5' />
                                            <span>
                                                <span className='block text-sm'>Apple MackBook Pro(8GB RAM,256GB SSD,33.78cm,Space Gray)</span>
                                            </span>
                                        </span>
                                    </td>
                                    <td>
                                        2<span className='mx-1'>X</span>&#8377;16000<span className='mx-1'>=</span>32000
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className='flex items-center justify-between mb-5'>
                        <div className='flex items-center'>
                            <div className='max-w-[70px] w-full h-[70px] mr-5'>
                            </div>
                        </div>
                        <div className='text-sm ps-3'>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='w-full md:w-2/5 lg:w-1/3'>
                <div className='max-w-none md:max-w-[330px] w-full mx-auto p-5'>
                    <h1 className='capitalize text-center text-xl font-medium pb-6 border-b-2 border-stone-300 mb-5'>order summery</h1>
                    <div className=''>
                        <div className='flex justify-between items-center mb-6'>
                            <span className='font-semibold text-stone-600 text-sm'>Subtotal: </span>
                            <span className='text-stone-500'>&#8377;32000</span>
                        </div>
                        <div className='flex justify-between items-center mb-6'>
                            <span className='font-semibold text-stone-600 text-sm'>Shipping Charges: </span>
                            <span className=' text-stone-500'>0</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='font-semibold text-stone-600 text-sm'>GST: </span>
                            <span className=' text-stone-500'>0</span>
                        </div>
                    </div>
                    <hr className='h-0.5 bg-stone-300 my-6' />
                    <div className='flex justify-between items-center mb-6'>
                        <span className='font-bold text-lg'>Total: </span>
                        <span className='text-lg'>&#8377;32000</span>
                    </div>
                    <div className='text-center'>
                        <button className='capitalize font-semibold text-lg my-5 p-2 bg-primary text-white max-w-[250px] md:max-w-none w-full hover:bg-[#f9486c]' onClick={() => goToNextStep()}>proceed to payment</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ConfirmOrder