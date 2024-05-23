import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
        return <Navigate to="/login" />
    }

    return children ? children : <Outlet />
}