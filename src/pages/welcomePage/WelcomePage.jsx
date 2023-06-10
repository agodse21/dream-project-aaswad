import {
  Box,
  Button,
  FormControl,
  Grid,
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
import FeedbackPng from "../../assets/feedback_illust.png";
import FoodPng from "../../assets/food_illust.png";
import ClickPng from "../../assets/click_illust.png";

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
      <Stack width={"100%"} mb={"25px"} flexDirection={"row"}>
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
      <Grid
        container
        spacing={{ xs: 2, sm: 8, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        width={"100%"}
        height={"330px"}
        bgcolor={"#EDF2F8"}
        alignItems={"flex-start"} 
      >
        <Grid
          item
          xs={3}
          sm={4}
          md={4}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <img
            src={FeedbackPng}
            width={"25%"}
            style={{ marginTop: "-15px" }}
            alt="feedbackimg"
          />
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={1}
          >
            <Typography
              variant="h5"
              fontFamily="FuturaPTCondBook"
              fontWeight={"bold"}
              color="#d32f2f"
              textAlign={"center"}
            >
              Ratings & Reviews
            </Typography>
            <Typography
              width={"70%"}
              variant="p"
              margin={"auto"}
              textAlign={"center"}
            >
              Ratings and reviews enrich the meal-searching experience with
              valuable user feedback
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sm={4}
          md={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={2}
        >
          <img
            src={FoodPng}
            width={"25%"}
            style={{ marginTop: "-15px" }}
            alt="x"
          />
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={1}
          >
            <Typography
              variant="h5"
              fontFamily="FuturaPTCondBook"
              fontWeight={"bold"}
              color="#d32f2f"
              textAlign={"center"}
            >
              Healthy Eats
            </Typography>
            <Typography
              width={"70%"}
              variant="p"
              margin={"auto"}
              textAlign={"center"}
            >
              Discover a world of nourishing delights with our extensive
              selection of healthy food options
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sm={4}
          md={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={1}
        >
          <img
            src={ClickPng}
            width={"25%"}
            style={{ marginTop: "-20px" }}
            alt="x"
          />
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            gap={1}
          >
            <Typography
              variant="h5"
              fontFamily="FuturaPTCondBook"
              fontWeight={"bold"}
              color="#d32f2f"
              textAlign={"center"}
            >
              Fingertip Feasts
            </Typography>
            <Typography
              width={"70%"}
              variant="p"
              margin={"auto"}
              textAlign={"center"}
            >
              Discover a world of culinary delights at your fingertips with our
              meal searching website
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
