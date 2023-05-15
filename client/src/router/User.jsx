import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const User = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  if (loading) {
    return <h1>Loadin</h1>;
  }
  if (currentUser) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace />;
};

export default User;
