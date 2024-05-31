import React from 'react'
import DashLayout from '../../component/Admin/DashLayout'
import { Icon } from '@iconify/react/dist/iconify.js'

const Dashboard = () => {
    return (
        <DashLayout title="Dashboard">
            <div className='grid grid-cols-4 gap-4'>
                <div className='rounded-md shadow-md p-5'>
                    <div className='flex justify-between mb-3'>
                        <h2 className='text-xl font-medium'>Total Amount</h2>
                    </div>
                    <div className='text-xl font-bold text-primary'>&#8377;1485412</div>
                </div>
                <div className='rounded-md shadow-md p-5'>
                    <div className='flex justify-between mb-3'>
                        <h2 className='text-xl font-medium'>Product</h2>
                        <span>
                            <Icon icon="ri:arrow-right-up-line" className='text-2xl text-danger cursor-pointer' />
                        </span>
                    </div>
                    <div className='text-xl font-bold text-primary'>583</div>
                </div>
                <div className='rounded-md shadow-md p-5'>
                    <div className='flex justify-between mb-3'>
                        <h2 className='text-xl font-medium'>Order</h2>
                        <span>
                            <Icon icon="ri:arrow-right-up-line" className='text-2xl text-danger cursor-pointer' />
                        </span>
                    </div>
                    <div className='text-xl font-bold text-primary'>68</div>
                </div>
                <div className='rounded-md shadow-md p-5'>
                    <div className='flex justify-between mb-3'>
                        <h2 className='text-xl font-medium'>Users</h2>
                        <span>
                            <Icon icon="ri:arrow-right-up-line" className='text-2xl text-danger cursor-pointer' />
                        </span>
                    </div>
                    <div className='text-xl font-bold text-primary'>53</div>
                </div>
            </div>
        </DashLayout>
    )
}

export default Dashboard