import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("userdata")) || false;

  const location = useLocation();
  if (!auth) {
    // toast({
    //   title: "Your not logged in",
    //   description: "Please Log in first",
    //   status: "error",
    //   duration: 9000,
    //   isClosable: true,
    //   position: "top",
    // });
    alert("login first");
  }

  if (!auth) {
    return (
      <Navigate to="/signin" replace state={{ data: location.pathname }} />
    );
  }
  return children;
};
