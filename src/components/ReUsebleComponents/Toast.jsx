import { Snackbar } from "@mui/material";
import React from "react";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Toast = ({ open, variant, message }) => {
  const [show, setShow] = useState(open);
  const handleClose = () => {
    setShow(!open);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={show}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={variant}
        sx={{ width: "100%", fontFamily: "FuturaPTCondBook", fontSize: "18px" }}
      >
        {message}!
      </Alert>
    </Snackbar>
  );
};
