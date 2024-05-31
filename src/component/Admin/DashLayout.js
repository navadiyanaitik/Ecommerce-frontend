import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


const DashLayout = ({ children, title = '' }) => {
    return (
        <div>
            <Navbar title={title} />
            <Sidebar />
            <div className='ml-52 p-5 mt-20 min-h-[calc(100vh_-_80px)]'>
                {children}
            </div>
        </div>
    )
}

export default DashLayout