import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
function Container6() {
  return (
    <div>
      <Box sx={{ bgcolor: "#f7f7fc", pt: 4, pb: 6 }}>
        <Typography variant="h5" textAlign="center" fontWeight={600}>
          FREQUENTLY ASKED QUESTION
        </Typography>
        <Typography textAlign="center" sx={{ mb: 2 }}>
          Here are some common queries and question that brands ask.
        </Typography>
        <Stack direction="row" spacing={3} sx={{ mx: 40 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#fff",
              px: 1,
              width: 400,
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 13 }}>What is SEO?</Typography>
            <AddIcon
              sx={{
                fontSize: 17,
                bgcolor: "#619AD3",
                borderRadius: "50%",
                p: 0.3,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#fff",
              px: 1,
              width: 400,
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 13 }}>
              How much do SEO services cost ?
            </Typography>
            <AddIcon
              sx={{
                fontSize: 17,
                bgcolor: "#619AD3",
                borderRadius: "50%",
                p: 0.3,
              }}
            />
          </Box>
        </Stack>
        <Stack direction="row" spacing={3} sx={{ mx: 40, mt: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#fff",
              px: 1,
              width: 400,
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 13 }}>How does SEO work?</Typography>
            <AddIcon
              sx={{
                fontSize: 17,
                bgcolor: "#619AD3",
                borderRadius: "50%",
                p: 0.3,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#fff",
              px: 1,
              width: 400,
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 13 }}>
              How do I know which type of SEO service I need? ?
            </Typography>
            <AddIcon
              sx={{
                fontSize: 17,
                bgcolor: "#619AD3",
                borderRadius: "50%",
                p: 0.3,
              }}
            />
          </Box>
        </Stack>
        <Stack direction="row" spacing={3} sx={{ mx: 40, mt: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#fff",
              px: 1,
              width: 400,
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 13 }}>
              What are SEO services ?
            </Typography>
            <AddIcon
              sx={{
                fontSize: 17,
                bgcolor: "#619AD3",
                borderRadius: "50%",
                p: 0.3,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#fff",
              px: 1,
              width: 400,
              p: 1,
            }}
          >
            <Typography sx={{ fontSize: 13 }}>
              Is maintaining the SEO is costly?
            </Typography>
            <AddIcon
              sx={{
                fontSize: 17,
                bgcolor: "#619AD3",
                borderRadius: "50%",
                p: 0.3,
              }}
            />
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default Container6;
