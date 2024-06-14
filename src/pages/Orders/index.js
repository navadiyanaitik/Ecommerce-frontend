import React from 'react'
import Layout from '../../component/layout/layout'
import { Icon } from '@iconify/react/dist/iconify.js'

const Orders = () => {
    return (
        <Layout>
            <div className='min-h-[calc(100vh_-_88px)] container p-5'>
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
                                    <Icon icon="icon-park-outline:share" className='text-xl text-primary cursor-pointer' />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </Layout>
    )
}

export default Orders