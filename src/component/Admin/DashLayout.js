import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import clsx from 'clsx';


const DashLayout = ({ children, title = '' }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div>
            <Navbar title={title} setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
            <Sidebar setIsExpanded={setIsExpanded} isExpanded={isExpanded} />
            <div className={clsx(isExpanded ? 'ml-0' : 'ml-0 md:ml-52', 'p-5  mt-20 min-h-[calc(100vh_-_80px)]')}>
                {children}
            </div>
        </div>
    )
}

export default DashLayout