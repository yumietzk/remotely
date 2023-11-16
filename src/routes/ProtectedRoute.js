import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../contexts/UserProvider";

function ProtectedRoute({ redirectPath = "/signin" }) {
  const { user } = useUser();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
