import React, { useRef } from "react";
import { Box, Typography, Stack } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work"; // 💼 Icon
import experienceData from "../assets/experienceData";
import ExperienceCard from "./ExperienceCard";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end start", "start end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Box
      ref={ref}
      width="100%"
      minHeight="100vh"
      px={{ xs: 2, sm: 6 }}
      py={6}
      sx={{
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
      id="experience"
    >
      {/* 💼 Heading with Icon */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ mb: 8 }}
      >
        <WorkIcon sx={{ fontSize: 40, color: "#ffd700", mb: "3px" }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#ffd700",
            textShadow: "0 1px 6px rgba(255,215,0,0.4)",
            letterSpacing: 1,
          }}
        >
          My Experience
        </Typography>
      </Stack>

      {/* Vertical Timeline Line */}
      <Box
        sx={{
          position: "absolute",
          top: "140px",
          bottom: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "4px",
          backgroundColor: "#444",
          zIndex: 0,
          borderRadius: "10px",
        }}
      >
        {/* Scroll Fill Line */}
        <motion.div
          style={{
            width: "100%",
            background: "#ffd700",
            height: lineHeight,
            borderRadius: "10px",
            transformOrigin: "top",
          }}
        />

        {/* Top & Bottom Circles */}
        <Box
          sx={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            backgroundColor: "#ffd700",
            position: "absolute",
            top: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            boxShadow: "0 0 8px rgba(255, 215, 0, 0.6)",
          }}
        />
        <Box
          sx={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            backgroundColor: "#ffd700",
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            boxShadow: "0 0 8px rgba(255, 215, 0, 0.6)",
          }}
        />
      </Box>

      {/* Experience Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          position: "relative",
          zIndex: 1,
        }}
      >
        {experienceData.map((e, idx) => (
          <ExperienceCard key={e.id} data={e} reverse={idx % 2 !== 0} />
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
