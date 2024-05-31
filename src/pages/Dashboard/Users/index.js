import React, { useState } from 'react'
import DashLayout from '../../../component/Admin/DashLayout'
import { Icon } from '@iconify/react/dist/iconify.js'
import UpdateUserModal from './UpdateUserModal';

const Users = () => {
    const [open, setOpen] = useState(false);
    const handleCloseModal = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <DashLayout title='Users'>
                <div className='overflow-auto'>
                    <table className='w-full table-auto'>
                        <thead>
                            <tr>
                                <th className='text-left p-2 bg-primary text-white'>Users ID</th>
                                <th className='p-2 text-left bg-primary text-white'>Email</th>
                                <th className='text-left p-2 bg-primary capitalize text-white min-w-[100px]'>Name</th>
                                <th className='text-center p-2 bg-primary capitalize text-white'>Role</th>
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
                                    <span>abhisheksharma1858@gmail.com</span>
                                </td>
                                <td className='p-2'>
                                    Abhishek Sharma
                                </td>
                                <td className='text-center p-2'>
                                    <span className='text-danger'>user</span>
                                </td>
                                <td className='text-center p-2 font-medium'>
                                    <span className='flex items-center justify-center'>
                                        <Icon icon="bxs:edit" className='text-xl text-gray-500 cursor-pointer mr-2' />
                                        <Icon icon="material-symbols:delete" className='text-xl text-danger cursor-pointer' />
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className='p-2'>
                                    89898df89df59efe9145
                                </td>
                                <td className='p-2'>
                                    <span>naitiknavadiya8526@gmail.com</span>
                                </td>
                                <td className='p-2'>
                                    Naitik Navadiya
                                </td>
                                <td className='text-center p-2'>
                                    <span className='text-success'>Admin</span>
                                </td>
                                <td className='text-center p-2 font-medium'>
                                    <span className='flex items-center justify-center'>
                                        <Icon icon="bxs:edit" className='text-xl text-gray-500 cursor-pointer mr-2' onClick={() => { setOpen(!open) }} />
                                        <Icon icon="material-symbols:delete" className='text-xl text-danger cursor-pointer' />
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </DashLayout>
            <UpdateUserModal open={open} closeModal={handleCloseModal} />
        </React.Fragment>

    )
}

export default Users