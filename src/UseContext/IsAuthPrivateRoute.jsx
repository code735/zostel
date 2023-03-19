import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { ZostelContext } from "./ZostelContext";

const IsAuthPrivateRoute = ({children}) => {
  const { isLogin } = useContext(ZostelContext);
  let location  =useLocation()
      if(!isLogin) {
          return <Navigate state={location.pathname} to='/login'/>;
      }
      return children
};

export default IsAuthPrivateRoute