import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../../component/Loader';

const PrivateRout = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
  
    if (loading) {
        return <Loader></Loader>;
    }
    if (user) {
       return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
       
   
};

export default PrivateRout;