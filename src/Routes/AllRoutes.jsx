import React from "react";
import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "../pages/welcomePage/WelcomePage";
import Cookies from "js-cookie";
import { HomePage } from "../pages/home/HomePage";
import { useSelector } from "react-redux";

export const AllRoutes = () => {
  const aaswadlog = Cookies.get("current_location") || Cookies.get("aaswadlog");
  const { current_location } = useSelector((state) => state.AppReducer);
  return (
    <Routes>
      <Route
        path="/"
        element={
          current_location?.full_address || aaswadlog ? (
            <HomePage />
          ) : (
            <WelcomePage />
          )
        }
      />
    </Routes>
  );
};
