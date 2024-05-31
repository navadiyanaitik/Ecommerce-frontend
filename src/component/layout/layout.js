import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/Navbar'
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <div className='page-layout'>
            <Navbar />

            {children}
            {
                ['/login', '/signup', '/reset_password'].includes(location.pathname)
                    ? <></>
                    : <Footer />
            }
        </div>
    )
}

export default Layout