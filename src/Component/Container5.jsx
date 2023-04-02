import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import res from "./Images/research 1.png";
import speed1 from "./Images/speed 1.png";
import search1 from "./Images/research 1.png";
import cwriting from "./Images/content-writing 1.png";
import savemoney from "./Images/save-money 1.png";
import test1 from "./Images/test 1.png";
function Container5() {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#f8f8f8",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ mt: 6, fontSize: "2rem" }}>
          OUR{" "}
          <Typography
            component="span"
            sx={{ color: "#0588bc", fontSize: "2rem" }}
          >
            {" "}
            R.O.C.K.E.T.{" "}
          </Typography>
          PROCESS
        </Typography>
        <Grid container spacing={2} sx={{ px: 15, mt: 2 }}>
          <Grid item md={4}>
            <Card
              sx={{
                px: 2,
                py: 3,
                bgcolor: "#0588bc",
                color: "#fff",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Typography
                  sx={{
                    pb: 1,
                    fontSize: "1.4rem",
                    fontWeight: "600",
                    lineHeight: "50px",
                  }}
                >
                  Research
                </Typography>
                <Box
                  component="img"
                  width={40}
                  src={res}
                  sx={{ height: 40, lineHeight: "50px" }}
                />
              </Stack>

              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
                veritatis molestiae soluta dolore tempora sapiente deleniti
                eligendi. Ab?
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -In-depth Competitor Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Site and Server Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Analysis 200+ On-Site SEO{" "}
              </Typography>
              <Typography sx={{ pb: 4, fontSize: 13 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                corporis corrupti quae! Voluptatum, aspernatur repellat!
              </Typography>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ px: 2, py: 3, boxShadow: "none", lineHeight: "50px" }}>
              <Stack direction="row" spacing={2}>
                <Typography
                  sx={{ fontSize: "1.6rem", fontWeight: "600", pb: 1 }}
                >
                  Optimize
                </Typography>
                <Box
                  component="img"
                  width={40}
                  src={speed1}
                  sx={{ height: 40 }}
                />
              </Stack>

              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
                veritatis molestiae soluta dolore tempora sapiente deleniti
                eligendi. Ab?
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -In-depth Competitor Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Site and Server Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Analysis 200+ On-Site SEO{" "}
              </Typography>
              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                impedit, quia totam culpa rerum tempore accusantium asperiores
                optio voluptatum eaque ratione incidunt, soluta debitis dolorem
                fugiat sed corrupti, rem quibusdam!
              </Typography>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ px: 2, py: 3, boxShadow: "none" }}>
              <Stack direction="row" spacing={2}>
                <Typography
                  sx={{ fontSize: "1.6rem", fontWeight: "600", pb: 1 }}
                >
                  Content
                </Typography>
                <Box
                  component="img"
                  width={40}
                  src={cwriting}
                  sx={{ height: 40 }}
                />
              </Stack>

              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
                veritatis molestiae soluta dolore tempora sapiente deleniti
                eligendi. Ab?
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -In-depth Competitor Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Site and Server Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Analysis 200+ On-Site SEO{" "}
              </Typography>
              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                impedit, quia totam culpa rerum tempore accusantium asperiores
                optio voluptatum eaque ratione incidunt, soluta debitis dolorem
                fugiat sed corrupti, rem quibusdam!
              </Typography>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ px: 2, py: 3, boxShadow: "none", pb: 8 }}>
              <Stack direction="row" spacing={2}>
                <Typography
                  sx={{
                    fontSize: "1.8rem",
                    fontWeight: "600",
                    pb: 1,
                    lineHeight: "60px",
                  }}
                >
                  Keywords
                </Typography>
                <Box
                  component="img"
                  width={40}
                  src={search1}
                  sx={{ height: 40, pt: 1 }}
                />
              </Stack>

              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
                veritatis molestiae soluta dolore tempora sapiente deleniti
                eligendi. Ab?
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -In-depth Competitor Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Site and Server Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Analysis 200+ On-Site SEO{" "}
              </Typography>
              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                impedit, quia totam culpa rerum tempore accusantium asperiores
                optio voluptatum eaque ratione incidunt, soluta debitis dolorem
                fugiat sed corrupti, rem quibusdam!
              </Typography>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ px: 2, py: 3, boxShadow: "none" }}>
              <Stack direction="row" spacing={1}>
                <Typography
                  sx={{
                    fontWeight: "600",
                    pb: 1,
                    lineHeight: "50px",
                    fontSize: "30px",
                    width: 290,
                  }}
                >
                  Earned Media & Links
                </Typography>
                <Box
                  component="img"
                  width={40}
                  src={savemoney}
                  sx={{ height: 40 }}
                />
              </Stack>

              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
                veritatis molestiae soluta dolore tempora sapiente deleniti
                eligendi. Ab?
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -In-depth Competitor Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Site and Server Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Analysis 200+ On-Site SEO{" "}
              </Typography>
              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                impedit, quia totam culpa rerum tempore accusantium asperiores
                optio voluptatum eaque ratione incidunt, soluta debitis dolorem
                fugiat sed corrupti, rem quibusdam!
              </Typography>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card sx={{ px: 2, py: 3, boxShadow: "none", pb: 11 }}>
              <Stack direction="row" spacing={2}>
                <Typography
                  sx={{ fontSize: "1.6rem", fontWeight: "600", pb: 1 }}
                >
                  Testing
                </Typography>
                <Box
                  component="img"
                  width={40}
                  src={test1}
                  sx={{ height: 40 }}
                />
              </Stack>

              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo a nulla, est dolorum ipsam delectus, perspiciatis
                veritatis molestiae soluta dolore tempora sapiente deleniti
                eligendi. Ab?
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -In-depth Competitor Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Site and Server Analysis
              </Typography>
              <Typography sx={{ py: 1, fontSize: 13 }}>
                -Analysis 200+ On-Site SEO{" "}
              </Typography>
              <Typography sx={{ fontSize: 13 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                impedit, quia totam culpa rerum tempore accusantium asperiores
                optio voluptatum eaque ratione incidunt, soluta debitis dolorem
                fugiat sed corrupti, rem quibusdam!
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default Container5;
