import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";


const TokenAuth = ({token, children}) => {
    return token ? children : <Navigate to="/login" />
};

const ProtectedRoutes = () => {
    const token = localStorage.getItem('token');
    return (
        <TokenAuth token={token}>
            <Outlet />
        </TokenAuth>
    );
}

export default ProtectedRoutes;