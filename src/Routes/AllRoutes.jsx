import React from "react";
import { Route, Routes } from "react-router-dom";
import { WelcomePage } from "../pages/welcomePage/WelcomePage";
import Cookies from "js-cookie";
import { HomePage } from "../pages/home/HomePage";
import { useSelector } from "react-redux";
import { Aboutus } from "../pages/about/Aboutus";
import { Careers } from "../pages/careers/Careers";
import { ContactUs } from "../pages/contactUs/ContactUs";
import { Teams } from "../pages/teams/Teams";
import { PartnerWithUs } from "../pages/partner-with-us/PartnerWithUs";
import { PartnerHelpCenter } from "../pages/partner-help-center/PartnerHelpCenter";
import { Privacy } from "../pages/privacy/Privacy";
import { Security } from "../pages/security/Security";
import { Terms } from "../pages/terms-and-conditions/Terms";

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
      <Route path="/about" element={<Aboutus />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/partner-with-us" element={<PartnerWithUs />} />
      <Route path="/partner-help-center" element={<PartnerHelpCenter />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/security" element={<Security />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};
