import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Container7() {
  return (
    <div>
      <Box>
        <Box sx={{ bgcolor: "#002B48", pt: 7, pb: 5 }}>
          <Typography
            sx={{
              fontSize: "30px",
              textAlign: "center",
              color: "white",
            }}
          >
            Get Free Consultation
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#FFFFFF",
              fontSize: "20px",
              textAlign: "center",
              opacity: 0.8,
            }}
          >
            Book an appoinment with our team through google meet / zoom call
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "44px",
              textTransform: "none",
              mt: 3,
              ml: 85,
              py: 2,
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Schedule a meeting
          </Button>
        </Box>
        <Box sx={{ py: 4, bgcolor: "#3C83CB" }}>
          <Stack direction="row" spacing={95} sx={{ px: 10 }}>
            <Typography variant="h6" sx={{ color: "white" }}>
              DO YOU WANT TO RANK YOUR WEBSITE
            </Typography>

            <Button
              variant="outlined"
              disableElevation
              disableRipple
              sx={{
                fontSize: "15px",
                color: "white",
                borderColor: "white",
              }}
            >
              Let's Connect
            </Button>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

export default Container7;
