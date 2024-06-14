import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import DashLayout from '../../../component/Admin/DashLayout';
import { Icon } from '@iconify/react/dist/iconify.js';
import SelectField from '../../../component/SelectField/SelectField';

const categoryList = [
    {
        "id": 1,
        "name": "Process",
    },
    {
        "id": 2,
        "name": "Shipped",
    },
]


const OrderDetails = () => {
    const { id } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(categoryList[0]);

    return (
        <React.Fragment>
            <DashLayout title='Order Details'>
                <div className='flex flex-col lg:flex-row items-start'>
                    <div className='w-full lg:w-2/3 lg:border-r border-stone-300 pr-3 lg:pr-5 pb-10'>
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
                            <div className='flex flex-col lg:flex-row lg:items-center text-sm sm:text-base'>
                                <div className='w-[120px] mr-2'>Address:</div>
                                <p className='text-gray-500 mt-2 lg:mt-0'>h-77 doc op, los angles,USA,465011,USA</p>
                            </div>
                        </div>
                        <div className='mb-12'>
                            <h1 className='text-2xl sm:text-3xl font-semibold capitalize mb-10'>Payment</h1>
                            <div className='mb-3 text-success font-semibold text-xl uppercase'>paid</div>
                            <div className='flex items-center mb-3 text-sm sm:text-base'>
                                <div className='w-[120px] mr-2'>Amount:</div>
                                <p className='text-gray-500'>&#8377;32225.75</p>
                            </div>
                        </div>
                        <div className='mb-12'>
                            <h1 className='text-2xl sm:text-3xl font-semibold capitalize mb-10'>Order Status</h1>
                            <div className='mb-3 text-danger font-semibold text-xl capitalize'>processing</div>
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
                    <div className='w-full lg:w-1/3'>
                        <div className='max-w-none xs:max-w-[330px] w-full mx-auto p-5'>
                            <h1 className='capitalize text-center text-2xl font-medium pb-6 border-b-2 border-stone-300 mb-5'>Process Order</h1>
                            <div className='flex h-12 border border-gray-400 mb-5'>
                                <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                                    <Icon icon="ph:git-branch-fill" className='text-2xl text-gray-500' />
                                </div>
                                <div className='h-12 flex-grow'>
                                    <SelectField listItems={categoryList} selected={selectedCategory} setSelected={setSelectedCategory} />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button className='capitalize font-semibold text-lg my-5 p-2 bg-primary text-white max-w-[250px] md:max-w-none w-full hover:bg-[#f9486c]' onClick={() => { }}>proceed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </DashLayout>
        </React.Fragment>
    )
}

export default OrderDetails