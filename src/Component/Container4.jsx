import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import men from "./Images/men.jpg";
function Container4() {
  return (
    <div>
      <Box sx={{ bgcolor: "$f5f5f5" }}>
        <Grid container>
          <Grid xs={7} sx={{ p: 5, pl: 12 }}>
            <Typography variant="h5" sx={{ width: 300 }}>
              Work with <span style={{ color: "#3C83CB" }}>Top-Notch</span>{" "}
              Talent To Scale Your Revenue
            </Typography>

            <Divider
              sx={{
                width: 70,
                borderBottomWidth: 3,
                background: "#3C83CB",
                my: 1,
              }}
            />
            <Stack direction="row" spacing={1}>
              <CheckIcon
                sx={{
                  fontSize: 13,
                  bgcolor: "green",
                  color: "#fff",
                  borderRadius: "50%",
                  m: 0.3,
                }}
              />
              <Typography sx={{ fontSize: 14 }}>
                Width 756px Height 302px Top 2727px Left 169px More qualified
                leads (and therefore more sales 💰)
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <CheckIcon
                sx={{
                  fontSize: 13,
                  bgcolor: "green",
                  color: "#fff",
                  borderRadius: "50%",
                  m: 0.3,
                }}
              />
              <Typography sx={{ fontSize: 14 }}>
                Save thousands of dollars from unproven strategies
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <CheckIcon
                sx={{
                  fontSize: 13,
                  bgcolor: "green",
                  color: "#fff",
                  borderRadius: "50%",
                  m: 0.3,
                }}
              />
              <Typography sx={{ fontSize: 14 }}>
                A website that converts 3x-5x higher 😀
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <CheckIcon
                sx={{
                  fontSize: 13,
                  bgcolor: "green",
                  color: "#fff",
                  borderRadius: "50%",
                  m: 0.3,
                }}
              />
              <Typography sx={{ fontSize: 14 }}>
                Improved organic ranking
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <CheckIcon
                sx={{
                  fontSize: 13,
                  bgcolor: "green",
                  color: "#fff",
                  borderRadius: "50%",
                  m: 0.3,
                }}
              />
              <Typography sx={{ fontSize: 14 }}>
                Increased company revenue 📈
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <CheckIcon
                sx={{
                  fontSize: 13,
                  bgcolor: "green",
                  color: "#fff",
                  borderRadius: "50%",
                  m: 0.3,
                }}
              />
              <Typography sx={{ fontSize: 14 }}>
                The right customers/clients Increased company revenue 📈
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={5} sx={{ p: 1 }}>
            <Box component="img" src={men} width={320} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Container4;
