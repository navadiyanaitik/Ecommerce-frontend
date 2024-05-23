import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <div className='page-layout'>
            <Navbar />

            {children}
            <Footer />
        </div>
    )
}

export default Layout