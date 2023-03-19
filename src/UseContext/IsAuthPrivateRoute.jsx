import { useContext } from "react";
import { Navigate } from "react-router";
import { ZostelContext } from "./ZostelContext";

const IsAuthPrivateRoute = ({children}) => {
  const { isLogin } = useContext(ZostelContext);
      if(!isLogin) {
          return <Navigate to='/login'/>;
      }
      return children
};

export default IsAuthPrivateRoute