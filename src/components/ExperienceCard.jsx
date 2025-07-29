import React from "react";
import { Box, Typography, Stack, Avatar, Paper } from "@mui/material";
import { motion } from "framer-motion";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"; // 🧩 Import the icon

const ExperienceCard = ({ data, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Stack
        direction={{ xs: "column", md: reverse ? "row-reverse" : "row" }}
        spacing={4}
        alignItems="center"
      >
        {/* Logo */}
        <Avatar
          src={data.logo}
          alt={data.company_name}
          variant="rounded"
          sx={{
            width: { xs: 120, md: 160 },
            height: { xs: 120, md: 160 },
            bgcolor: "#fff",
            boxShadow: "0 8px 20px rgba(255,255,255,0.1)",
            border: "3px solid #ffd700",
          }}
        />

        {/* Content */}
        <Paper
          elevation={3}
          sx={{
            p: 3,
            maxWidth: 600,
            bgcolor: "#1e1e1e",
            border: "1px solid #333",
            borderRadius: 3,
            position: "relative", // for absolute icon
          }}
        >
          {/* Icon on top-left */}
          <Box
            sx={{
              position: "absolute",
              top: -20,
              left: -20,
              bgcolor: "#ffd700",
              borderRadius: "50%",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
            }}
          >
            <WorkOutlineIcon sx={{ color: "#000", fontSize: 28 }} />
          </Box>

          <Typography variant="h6" sx={{ color: "#ffd700", fontWeight: "bold" }}>
            {data.company_name}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#ccc", mb: 1 }}>
            {data.specialization}
          </Typography>
          <Typography variant="body2" sx={{ color: "#aaa", mb: 2 }}>
            {data.description}
          </Typography>
          <Typography variant="caption" sx={{ color: "lightgreen", fontWeight: 500 }}>
            Duration: {data.duration}
          </Typography>
        </Paper>
      </Stack>
    </motion.div>
  );
};

export default ExperienceCard;
