import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoutes = (Component) => {
  const { user } = useSelector((state) => state);
  if (user) {
    return <Navigate to="/homePage" />;
  }
  return Component;
};

export default PublicRoutes;