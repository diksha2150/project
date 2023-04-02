import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import fig1 from "./Images/fig1.jpg";
import fig2 from "./Images/fig2.jpg";
import fig3 from "./Images/fig3.jpg";
import fig4 from "./Images/fig4.jpg";
function Container2() {
  return (
    <div>
      <Box>
        <Typography
          variant="h5"
          sx={{ width: 300, textAlign: "center", mx: "auto", mt: 6 }}
        >
          Scaling a <span style={{ color: "#3C83CB" }}> Business</span> Should
          Not Be a <span style={{ color: "#3C83CB" }}> Mystery </span>
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
        <Stack direction="row" spacing={3} sx={{ mx: 20, my: 2 }}>
          <Card sx={{ maxWidth: 270 }}>
            <CardMedia src={fig1} component="img" />
            <CardContent sx={{ fontSize: 17, px: 1, textAlign: "center" }}>
              Have you spent thousands of doller with out seeing any qualified
              leads ?
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 270 }}>
            <CardMedia src={fig2} component="img" />
            <CardContent sx={{ fontSize: 14, px: 1, textAlign: "center" }}>
              Are you pumping money into digital marketing but are't sure if
              it's actually working?
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 270 }}>
            <CardMedia src={fig3} component="img" />
            <CardContent sx={{ fontSize: 14, px: 1, textAlign: "center" }}>
              Do you feel frustated by the lack of marketing results?
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 270 }}>
            <CardMedia src={fig4} component="img" />
            <CardContent sx={{ fontSize: 14, px: 1, textAlign: "center" }}>
              Are you bouncing from one digital marketing agency to another
              trying to see real results ?
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </div>
  );
}
export default Container2;
