import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({
  isAllowed,
  redirectTo = "/login",
  children,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;