import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({Component}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true)
        }
    }, [])
    
  return (
    isAuthenticated ? Component : navigate('/login')
  )
}

export default PrivateRoute