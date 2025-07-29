import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import certificateData from "../assets/certificateData";
import CertificateCard from "./CertificateCard";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Certificate = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#121212",
        py: 6,
        px: { xs: 2, sm: 6 },
        color: "#fff",
      }}
      id="certificate"
    >
      {/* Heading with Icon */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ mb: 5 }}
      >
        <WorkspacePremiumIcon sx={{ fontSize: 36, color: "#ffd700" }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#ffd700",
            textShadow: "0 1px 6px rgba(255, 215, 0, 0.3)",
          }}
        >
          My Certificates
        </Typography>
      </Stack>

      {/* Certificate Cards */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
      >
        {certificateData.map((certificate) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={certificate.id}>
            <CertificateCard {...certificate} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certificate;
