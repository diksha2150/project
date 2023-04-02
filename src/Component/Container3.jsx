import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import RocketIcon from "@mui/icons-material/Rocket";

function Container3() {
  return (
    <div>
      <Box sx={{ py: 4, px: 1, bgcolor: "#e9e9e9" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={0}
            aria-label="basic tabs example"
            sx={{
              "& .css-heg063-MuiTabs-flexContainer": {
                justifyContent: "center",
                gap: 5,
              },
            }}
          >
            <Tab label="LOCAL SEO PACKAGES" sx={{ color: "#000" }} />
            <Tab label="LOCAL SEARCH OPTIMITION" sx={{ color: "#000" }} />
            <Tab label="CONTENT MARKETING" sx={{ color: "#000" }} />
            <Tab label="OFF PAGE OPTIMIZATION" sx={{ color: "#000" }} />
            <Tab label="MONTHLY REPORTING" sx={{ color: "#000" }} />
          </Tabs>
        </Box>
        <Stack direction="row" gap={2} sx={{ p: 5, mx: 20 }}>
          <Card sx={{ p: 1 }}>
            <CardContent>
              <Typography
                sx={{ color: "#cdc906", fontSize: "1.8rem", fontWeight: "600" }}
              >
                Basic
                <LayersOutlinedIcon sx={{ verticalAlign: "middle" }} />
              </Typography>
              <Typography sx={{ fontSize: "1rem", py: 1 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium nisi iure unde.
              </Typography>
              <Typography sx={{ fontSize: "1.8rem", fontWeight: "600" }}>
                160$
                <Typography
                  component="span"
                  sx={{ color: "#999", fontSize: "1.2rem" }}
                >
                  /Month
                </Typography>
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 4,

                  mx: 4.5,
                  px: 4,
                  py: 1,
                  boxShadow: "none",
                  textTransform: "none",
                }}
              >
                See Benefits
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ p: 1 }}>
            <CardContent>
              <Typography
                sx={{ color: "#0570bc", fontSize: "1.8rem", fontWeight: "600" }}
              >
                Growth
                <EqualizerOutlinedIcon sx={{ verticalAlign: "middle" }} />
              </Typography>
              <Typography sx={{ fontSize: "1rem", py: 1 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium nisi iure unde.
              </Typography>
              <Typography sx={{ fontSize: "1.8rem", fontWeight: "600" }}>
                300$
                <Typography
                  component="span"
                  sx={{ color: "#999", fontSize: "1.2rem" }}
                >
                  /Month
                </Typography>
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  mx: 4.5,
                  px: 4,

                  py: 1,
                  boxShadow: "none",
                  textTransform: "none",
                }}
              >
                See Benefits
              </Button>
            </CardContent>
          </Card>
          <Card sx={{ p: 1 }}>
            <CardContent>
              <Typography
                sx={{ color: "#bc0505", fontSize: "1.8rem", fontWeight: "600" }}
              >
                Booster
                <RocketIcon sx={{ verticalAlign: "middle" }} />
              </Typography>
              <Typography sx={{ fontSize: "1rem", py: 1 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium nisi iure unde.
              </Typography>
              <Typography sx={{ fontSize: "1.8rem", fontWeight: "600" }}>
                400$
                <Typography
                  component="span"
                  sx={{ color: "#999", fontSize: "1.2rem" }}
                >
                  /Month
                </Typography>
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 4,
                  mx: 4.5,
                  px: 4,
                  py: 1,
                  boxShadow: "none",
                  textTransform: "none",
                }}
              >
                See Benefits
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </div>
  );
}

export default Container3;
