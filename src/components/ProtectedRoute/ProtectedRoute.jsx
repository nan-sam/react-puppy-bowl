import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const getToken = ( ) => localStorage.getItem("token");
  return getToken() ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;