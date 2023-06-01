import React from "react";
import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "../pages/welcomePage/WelcomePage";
import Cookies from "js-cookie";
import { HomePage } from "../pages/home/HomePage";

export const AllRoutes = () => {
  const aaswadlog = Cookies.get("aaswadlog");

  return (
    <Routes>
      <Route path="/" element={aaswadlog ? <HomePage /> : <WelcomePage />} />
    </Routes>
  );
};
