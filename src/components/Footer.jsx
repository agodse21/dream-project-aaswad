import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        width={"100%"}
        height={"350px"}
        bgcolor={"#EDF2F8"}
        padding={"20px 0"}
      >
        <Link to={"/"}>
          <img
            width={"200px"}
            style={{ marginLeft: "170px" }}
            src={Logo}
            alt="logo"
          />
        </Link>
        <Stack
          width={"75%"}
          m={"auto"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
        >
          <Stack justifyContent={"center"} flexDirection={"column"} gap={2}>
            <Typography
              variant="p"
              fontSize={"18px"}
              fontFamily="FuturaPTCondBook"
              fontWeight="bold"
            >
              ABOUT AASWAD
            </Typography>
            <Stack justifyContent={"center"} flexDirection={"column"} gap={1}>
              <Link
                to={"/about"}
                style={{
                  color: "rgb(105, 105, 105)",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Who We Are
              </Link>
              <Link
                to={"/team"}
                style={{
                  color: "rgb(105, 105, 105)",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Team
              </Link>
              <Link
                to={"/careers"}
                style={{
                  color: "rgb(105, 105, 105)",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Careers
              </Link>
              <Link
                to={"/contact"}
                style={{
                  color: "rgb(105, 105, 105)",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
            </Stack>
          </Stack>
          <Stack justifyContent={"center"} flexDirection={"column"} gap={2}>
            <Typography
              variant="p"
              fontSize={"18px"}
              fontFamily="FuturaPTCondBook"
              fontWeight="bold"
            >
              FOR MEAL CENTERS & RESTAURANTS
            </Typography>
            <Stack justifyContent={"center"} flexDirection={"column"} gap={1}>
              <Link
                to={"/partner-with-us"}
                style={{
                  color: "rgb(105, 105, 105)",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Partner With Us
              </Link>
              <Link
                to={"/pertner-help-center"}
                style={{
                  color: "rgb(105, 105, 105)",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Help Center For Partners
              </Link>
            </Stack>
          </Stack>
          <Stack justifyContent={"center"} flexDirection={"column"} gap={2}>
            <Typography
              variant="p"
              fontSize={"18px"}
              fontFamily="FuturaPTCondBook"
              fontWeight="bold"
            >
              LEARN MORE
            </Typography>
            <Stack justifyContent={"center"} flexDirection={"column"} gap={1}>
              <Link
                to={"/privacy"}
                style={{
                  color: "rgb(105, 105, 105)",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Privacy
              </Link>
              <Link
                to={"/security"}
                style={{
                  color: "rgb(105, 105, 105)",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Security
              </Link>
              <Link
                to={"/terms"}
                style={{
                  color: "rgb(105, 105, 105)",
                  fontSize: "18px",
                  textDecoration: "none",
                }}
              >
                Terms
              </Link>
            </Stack>
          </Stack>
          <Stack justifyContent={"center"} flexDirection={"column"} gap={3}>
            <Typography
              variant="p"
              fontSize={"18px"}
              fontFamily="FuturaPTCondBook"
              fontWeight="bold"
            >
              SOCIAL LINKS
            </Typography>
            <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
              <FaFacebook
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
                size={35}
              />

              <FaInstagram
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
                size={35}
              />

              <FaLinkedinIn
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
                size={35}
              />

              <FaTwitter
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
                size={35}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack width={"75%"} m="auto" mt={"30px"} gap={1}>
          <Divider />
          <Typography variant="p">
            &copy;Aaswad 2023. All rights reserved
          </Typography>
        </Stack>
      </Box>
    </>
  );
};
