import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import logo from "./Images/Kds logo 1.png";
function Navbar() {
  return (
    <div>
      <AppBar sx={{ bgcolor: "#fff", boxShadow: "none" }}>
        <Toolbar>
          <Box component="img" src={logo} sx={{ width: 150, ml: 5, mr: 80 }} />
          <Button variant="text" sx={{ fontSize: 12, color: "#101010" }}>
            About us
          </Button>
          <Button variant="text" sx={{ fontSize: 12, color: "#101010" }}>
            Service
          </Button>
          <Button variant="text" sx={{ fontSize: 12, color: "#101010" }}>
            Our portfolio
          </Button>
          <Button variant="text" sx={{ fontSize: 12, color: "#101010" }}>
            Testimonial
          </Button>
          <Button
            disableElevation
            variant="contained"
            sx={{
              fontSize: 12,

              color: "#fff",
              borderRadius: 0,
              bgcolor: "#3C83CB",
            }}
          >
            CALL NOW:9045301702
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;
