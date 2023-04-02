import {
  Avatar,
  Box,
  Button,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  InputBase,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import captcha from "./Images/png-transparent-recaptcha-hd-logo-thumbnail 1 (1).png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
function Container8() {
  return (
    <div>
      <Box sx={{ bgcolor: "#f5f5f5;" }}>
        <Grid container>
          <Grid xs={6} sx={{ p: 4, pl: 10 }}>
            <Typography sx={{ fontWeight: 600, fontSize: 18 }}>
              Contact Us
            </Typography>
            <Typography sx={{ color: "#666B6B", fontSize: 11 }}>
              Please complete the below form. we will get in touch with you
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <InputBase
                placeholder="Name*"
                fullWidth
                sx={{ bgcolor: "#fff", pl: 1, fontSize: 10, py: 1 }}
              />
              <InputBase
                placeholder="Phone Number*"
                fullWidth
                sx={{ bgcolor: "#fff", pl: 1, fontSize: 10, py: 1 }}
              />
            </Stack>
            <Stack direction="row" spacing={3} sx={{ mt: 2 }}>
              <InputBase
                placeholder="Email Address*"
                fullWidth
                sx={{ bgcolor: "#fff", pl: 1, fontSize: 10, py: 1 }}
              />
              <InputBase
                placeholder="Location*"
                fullWidth
                sx={{ bgcolor: "#fff", pl: 1, fontSize: 10, py: 1 }}
              />
            </Stack>
            <InputBase
              placeholder="Business Name"
              fullWidth
              sx={{ bgcolor: "#fff", pl: 1, mt: 2, fontSize: 10, py: 1 }}
            />

            <InputBase
              placeholder="Messages"
              fullWidth
              sx={{ bgcolor: "#fff", pl: 1, mt: 1, fontSize: 10, pb: 7, my: 2 }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "#fff",
                mt: 1,
                width: 270,
                p: 1,
              }}
            >
              <Stack direction="row" spacing={1}>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label=" I’m Not A Robot"
                  sx={{ fontSize: 10 }}
                />
              </Stack>
              <Box component="img" src={captcha} width={40} />
            </Box>

            <Button
              endIcon={<ArrowForwardIcon size="small" />}
              sx={{ borderRadius: 0, fontSize: 10, py: 1.5, px: 7, mt: 2 }}
              disableElevation
              variant="contained"
            >
              Submit
            </Button>
          </Grid>
          <Grid xs={6} sx={{ p: 4 }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={0}>
                <Tab label="Address" />
                <Tab label="Google Map" />
              </Tabs>
            </Box>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#fff" }}>
                  <LocationOnIcon sx={{ color: "#1c6bff" }} />
                </Avatar>
              }
              title="OUR LOCATION"
              subheader="G-9,first Floor, Sector 63, Noida"
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#fff" }}>
                  <EmailIcon sx={{ color: "#1c6bff" }} />
                </Avatar>
              }
              title="SEND US MAIL"
              subheader="shubham@kusheldigi.com"
            />
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "#fff" }}>
                  <SmartphoneIcon sx={{ color: "#1c6bff" }} />
                </Avatar>
              }
              title="CALL US"
              subheader="+91 9045301702"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Container8;
