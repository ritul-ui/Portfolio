import React, { useRef } from "react";
import { Box, Typography, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School"; // 🎓 Icon
import educationData from "../assets/educationData";
import EducationCard from "./EducationCard";
import { motion, useScroll, useTransform } from "framer-motion";

const Education = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
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
      id="education"
    >
      {/* 🎓 Heading with Icon */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ mb: 8 }}
      >
        <SchoolIcon sx={{ fontSize: 40, color: "#ffd700", mb: "3px" }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#ffd700",
            textShadow: "0 1px 6px rgba(255,215,0,0.4)",
            letterSpacing: 1,
          }}
        >
          My Education
        </Typography>
      </Stack>

      {/* Central Scroll Line */}
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
        {/* Top Circle */}
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
        {/* Bottom Circle */}
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

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          position: "relative",
          zIndex: 1,
        }}
      >
        {educationData.map((e, idx) => (
          <EducationCard data={e} key={e.id} reverse={idx % 2 !== 0} />
        ))}
      </Box>
    </Box>
  );
};

export default Education;
