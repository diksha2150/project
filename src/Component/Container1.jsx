import {
  Box,
  Button,
  Divider,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Container1() {
  return (
    <div>
      <Box
        sx={{ bgcolor: "black", textAlign: "center", color: "white", py: 12 }}
      >
        <Typography
          variant="h4"
          sx={{ width: 500, textAlign: "center", mx: "auto", fontSize: 35 }}
        >
          Digital Marketing Agency that Will skyrocket your sales
        </Typography>
        <Divider
          sx={{
            width: 90,
            borderBottomWidth: 3,
            background: "#3C83CB",
            mx: "auto",
            my: 2,
          }}
        />
        <Typography sx={{ my: 3 }}>
          Measurable results-driven-digital marketing services.
        </Typography>
        <Stack direction="row" spacing={3} sx={{ mx: "auto" }}>
          <InputBase
            placeholder="Enter your business e-mail"
            sx={{
              bgcolor: "#ffff",
              color: "#000",
              width: 350,
              paddingLeft: 2,
              py: 1.5,
              ml: 50,
            }}
          />
          <Button variant="contained" endIcon={<ArrowForwardIcon />}>
            SECHDULE YOUR FREE STRATEGY SESSION
          </Button>
        </Stack>
      </Box>
    </div>
  );
}
export default Container1;
