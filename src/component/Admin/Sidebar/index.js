import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'
import DashRoutes from '../../../constant/dashboardRoutes.json';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import clsx from 'clsx';

const Sidebar = () => {
    return (
        <div className='w-52 border-r border-gray-500 fixed inset-y-0 left-0 h-full z-10'>
            <div className='h-[calc(100vh_-_80px)] mt-20 py-6 px-4 overflow-y-auto'>
                {
                    DashRoutes.map((route) => {
                        return (
                            <React.Fragment>
                                <Link to={route.path} className='flex items-center cursor-pointer mb-4 p-2 group' key={route.id}>
                                    <span className='mr-3'>
                                        <Icon icon={route.icon} className='text-2xl text-gray-500 group-hover:text-gray-800' />
                                    </span>
                                    <span className='text-gray-500 group-hover:text-gray-900'>{route.title}</span>
                                </Link>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar