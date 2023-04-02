import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import logoImg from "./Images/Kds logo white 1.png";
import group from "./Images/Group 71734 1.png";
function Container9() {
  return (
    <div>
      <Box sx={{ bgcolor: "#001D4C", color: "#fff", p: 6, px: 12 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component="img"
            src={logoImg}
            sx={{ width: 120, color: "#fff" }}
          />
          <Stack direction="row" spacing={2}>
            <LocationOnIcon
              sx={{
                border: "1px solid white",
                borderRadius: "50%",
                color: "#fff",
                p: 0.2,
                fontSize: 14,
              }}
            />
            <Typography sx={{ fontSize: 14, mt: 1 }}>
              G-9, First Floor, Sector 63, Noida
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <EmailIcon
              sx={{
                border: "1px solid white",
                borderRadius: "50%",
                color: "#fff",
                p: 0.2,
                fontSize: 14,
              }}
            />
            <Typography sx={{ fontSize: 14, mt: 1 }}>
              Shubham@kusheldigi.com
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <CallIcon
              sx={{
                border: "1px solid white",
                borderRadius: "50%",
                color: "#fff",
                p: 0.2,
                fontSize: 14,
              }}
            />
            <Typography sx={{ fontSize: 14, mt: 1 }}>9045301702</Typography>
          </Stack>
        </Box>
        <Stack direction="row" spacing={20} sx={{ pt: 4 }}>
          <Box>
            <Typography
              sx={{
                fontSize: 14,
                color: "#fff",
                fontStyle: "oblique",
              }}
            >
              © 2023 Kusheldigi. All rights reserved.
            </Typography>

            <Typography sx={{ fontSize: 12, color: "#fff", mt: 1 }}>
              About Us | Insights | Blog | Privacy Policy | Sitemap
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: 14,
                color: "#fff",
                fontStyle: "oblique",
                ml: 12,
                wordSpacing: 9,
              }}
            >
              Follow Us On
            </Typography>
            <Box
              component="img"
              src={group}
              sx={{ width: 160, mt: 2, ml: 12, fontSize: 20 }}
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default Container9;
