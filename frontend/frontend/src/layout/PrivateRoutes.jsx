import { Navigate } from "react-router-dom"
import { isLoggedIn, getUser } from "../auth"

const PrivateRoute = ({ children, role }) => {
  if (!isLoggedIn()) return <Navigate to="/login" />

  if (role && getUser().role !== role) {
    return <Navigate to="/" />
  }

  return children
}

export default PrivateRoute
