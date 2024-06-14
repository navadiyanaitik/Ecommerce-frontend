import React from 'react'
import DashLayout from '../../../component/Admin/DashLayout'
import { Icon } from '@iconify/react/dist/iconify.js'

const Reviews = () => {
    return (
        <React.Fragment>
            <DashLayout title='All Reviews'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='flex h-12 border border-gray-400 mb-3 md:mb-0 md:mr-3'>
                        <div className='h-12 w-12 grid place-items-center border-r border-gray-400'>
                            <Icon icon="iconoir:search" className='text-2xl text-gray-500' />
                        </div>
                        <input className='h-full flex-grow outline-none p-2' placeholder='Review ID' />
                    </div>
                    <button className='capitalize font-semibold text-lg p-2 bg-primary text-white max-w-32 h-12 w-full hover:bg-[#f9486c]'>Search</button>

                </div>
                <div className='overflow-auto mt-10'>
                    <table className='w-full table-auto'>
                        <thead>
                            <tr>
                                <th className='text-left p-2 bg-primary text-white'>Review ID</th>
                                <th className='p-2 text-left min-w-[200px] bg-primary text-white'>User</th>
                                <th className='text-left p-2 min-w-[270px] bg-primary capitalize text-white'>Comment</th>
                                <th className='text-center p-2 bg-primary capitalize text-white'>Rating</th>
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
                                <td className='p-2'>
                                    <span className='text-danger font-semibold'>Abhishek Sharma</span>
                                </td>
                                <td className='p-2 font-medium'>
                                    Apple product is next level
                                </td>
                                <td className='text-center text-lg p-2 font-semibold text-success'>
                                    5
                                </td>
                                <td className='text-center p-2 font-medium'>
                                    <span className='flex items-center justify-center'>
                                        <Icon icon="material-symbols:delete" className='text-xl text-danger cursor-pointer' />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </DashLayout>
        </React.Fragment>
    )
}

export default Reviews