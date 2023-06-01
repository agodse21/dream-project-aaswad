import { Box } from "@mui/material";
import "./App.css";
import { AllRoutes } from "./Routes/AllRoutes";
import Cookies from "js-cookie";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  const isAuth = Cookies.get("isAuth");
  return (
    <Box className="font-face-pt">
      {isAuth && <Navbar />}
      <AllRoutes />
    </Box>
  );
}

export default App;
