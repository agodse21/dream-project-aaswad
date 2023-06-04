import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.png";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import LocateMe from "@mui/icons-material/MyLocation";
import feed from "../../assets/feed.svg";

const LoginBtn = styled(Button)(({ theme }) => ({
  fontFamily: "FuturaPTCondBook",
  fontWeight: "bold",
  fontSize: "18px",
  textTransform: "capitalize",
  color: "black",
  "&:hover": {
    color: "red",
    backgroundColor: "transparent",
  },
}));

const LocateMeIcon = styled(LocateMe)(({ theme }) => ({
  marginRight: "3px",
  "&:hover": {
    color: "#d32f2f",
  },
}));

const IconBtn = styled(IconButton)(() => ({
  fontFamily: "FuturaPTCondBook",
  fontWeight: "bold",
  fontSize: "18px",
  textTransform: "capitalize",
  "&:hover": {
    color: "#d32f2f",
  },
}));
export const WelcomePage = () => {
  const typewritterArray = [
    "Hungry?",
    "Staying alone?",
    "Missing homely food?",
    "Searching for healthy food?",
  ];
  return (
    <Box>
      <Stack width={"100%"} flexDirection={"row"}>
        <Box width={"50%"} padding={"20px"}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            ml={"100px"}
          >
            <Link to={"/"}>
              <img width={"200px"} src={Logo} alt="logo" />
            </Link>
            <Stack flexDirection={"row"} gap={2} alignItems={"center"}>
              <LoginBtn variant="text">login</LoginBtn>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                  fontFamily: "FuturaPTCondBook",
                  borderRadius: 0,
                  fontWeight: "bold",
                  fontSize: "18px",
                  textTransform: "capitalize",
                }}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
          <Stack flexDirection={"column"} ml="100px" mt="50px">
            <Typography variant="h4" fontWeight={"bold"} fontFamily={"Poppins"}>
              <Typewriter
                options={{
                  strings: typewritterArray,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <Typography
              variant="p"
              fontSize={"24px"}
              fontFamily="FuturaPTCondBook"
              mt={"20px"}
            >
              Search & pick favourite meal center.
            </Typography>
            <Stack flexDirection={"row"} mt={"30px"} gap={1} width={"100%"}>
              <FormControl sx={{ width: "80%" }}>
                <InputLabel
                  color="error"
                  sx={{ fontFamily: "FuturaPTCondBook", fontSize: "20px" }}
                  htmlFor="mealSerchInpu"
                >
                  Search for meal center or dish,location
                </InputLabel>
                <OutlinedInput
                  color="error"
                  id="outlined-adornment-password"
                  type={"text"}
                  sx={{
                    fontFamily: "FuturaPTCondBook",
                    fontSize: "20px",
                    paddingRight: "20px",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconBtn
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                        sx={{ borderRadius: "0px" }}
                      >
                        <LocateMeIcon /> locate me
                      </IconBtn>
                    </InputAdornment>
                  }
                  label="Search for meal center or dish,location"
                />
              </FormControl>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#ff2e02",
                  fontFamily: "FuturaPTCondBook",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                Find Meals
              </Button>
            </Stack>
            <Stack mt={"20px"} flexDirection={"column"}>
              <Typography
                variant="p"
                fontSize={"24px"}
                fontFamily="FuturaPTCondBook"
              >
                Currently we are in Hyderabad
              </Typography>
              <Typography
                variant="p"
                fontSize={"24px"}
                fontWeight={"bold"}
                fontFamily="FuturaPTCondBook"
                mt={"10px"}
              >
                We are spreading all over{" "}
                <span style={{ color: "#ff2e02", fontSize: "30px" }}>
                  India
                </span>
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box width={"50%"} height={"500px"} className="welcomeMainImg"></Box>
      </Stack>
      <Stack width={"100%"} height={"300px"} bgcolor={"#EDF2F8"}>
        <img src={feed} width={"200px"} alt="x" />
      </Stack>
    </Box>
  );
};

// meal on your fingertip
//retings&reviews
//healthy food - we are trying to give a healthy food direction
