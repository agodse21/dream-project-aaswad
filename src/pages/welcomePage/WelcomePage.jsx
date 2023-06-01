import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.png";
export const WelcomePage = () => {
  return (
    <>
      <Stack width={"100%"} flexDirection={"row"}>
        <Box width={"50%"} padding={"20px"}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <img
              width={"200px"}
              style={{ marginLeft: "100px" }}
              src={Logo}
              alt="logo"
            />
            <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
              <Button variant="text">Login</Button>
              <Button variant="contained" style={{ backgroundColor: "black" }}>
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box width={"50%"} height={"500px"} className="welcomeMainImg"></Box>
      </Stack>
    </>
  );
};
