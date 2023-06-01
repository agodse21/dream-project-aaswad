import { Button } from "@mui/material";
import Cookies from "js-cookie";
import React from "react";

export const HomePage = () => {
  const handleSet = () => {
    Cookies.remove("aaswadlog");
  };
  return (
    <div>
      <Button onClick={handleSet}>Set</Button>
      HomePage
    </div>
  );
};
