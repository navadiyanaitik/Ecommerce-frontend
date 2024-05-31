import React, { useState } from 'react'
import DashLayout from '../../../component/Admin/DashLayout'
import { Icon } from '@iconify/react/dist/iconify.js'
import CreateProductModal from './CreateProductModal'

const AllProducts = () => {
    const [open, setOpen] = useState(false);
    const handleCloseModal = () => {
        setOpen(false)
    }
    return (
        <React.Fragment>
            <DashLayout title="All Products">
                <div className='flex justify-end mb-5'>
                    <button className='uppercase text-sm flex items-center outline-none text-white bg-[#ec7d10] rounded-md font-semibold transition-all duration-100 p-2' onClick={() => { setOpen(!open) }} >
                        <Icon icon="material-symbols:add" className='text-xl mr-1' />
                        Add product
                    </button>
                </div>
                <div className='overflow-auto'>
                    <table className='w-full table-auto'>
                        <thead>
                            <tr>
                                <th className='text-left p-2 bg-primary text-white'>Product ID</th>
                                <th className='p-2 text-left bg-primary text-white'>Name</th>
                                <th className='text-center p-2 bg-primary capitalize text-white min-w-[100px]'>Stock</th>
                                <th className='text-center p-2 bg-primary capitalize text-white'>Price</th>
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
                                <td className=' p-2'>
                                    <span>Printed Oversized Cotton T-shirt</span>
                                </td>
                                <td className='text-center p-2'>
                                    100
                                </td>
                                <td className='text-center p-2'>
                                    &#8377;88,120
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
            <CreateProductModal open={open} closeModal={handleCloseModal} />
        </React.Fragment>
    )
}

export default AllProducts