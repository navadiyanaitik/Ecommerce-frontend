import React from 'react'
import DashLayout from '../../../component/Admin/DashLayout'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate } from 'react-router-dom'

const AdminOrders = () => {
    const navigate = useNavigate();
    return (
        <DashLayout title='Admin'>
            <div className='overflow-auto'>
                <table className='w-full table-auto'>
                    <thead>
                        <tr>
                            <th className='text-left p-2 bg-primary text-white'>Order ID</th>
                            <th className='p-2 text-center bg-primary text-white'>Status</th>
                            <th className='text-center p-2 bg-primary capitalize text-white min-w-[100px]'>Items Qty</th>
                            <th className='text-center p-2 bg-primary capitalize text-white'>Amount</th>
                            <th className='text-center p-2 bg-primary capitalize text-white'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='h-6' colSpan='3'></td>
                        </tr>
                        <tr>
                            <td className='p-2'>
                                89898df89df59efe9145
                            </td>
                            <td className='text-center p-2'>
                                <span className='text-danger font-semibold'>Processing</span>
                            </td>
                            <td className='text-center p-2 font-medium'>
                                1
                            </td>
                            <td className='text-center p-2 font-medium'>
                                &#8377;88,120
                            </td>
                            <td className='text-center p-2 font-medium'>
                                <span className='flex items-center justify-center'>
                                    <Icon icon="bxs:edit" className='text-xl text-gray-500 cursor-pointer mr-2' onClick={() => { navigate(`/admin/orders/1  `) }} />
                                    <Icon icon="material-symbols:delete" className='text-xl text-danger cursor-pointer' />
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </DashLayout>
    )
}

export default AdminOrders