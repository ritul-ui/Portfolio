import React from "react";
import { Box, Typography, Stack, Avatar } from "@mui/material";
import profilePic from "../assets/profileimg.png";

const About = () => {
  return (
    <Box
      width="100%"
      px={{ xs: 2, sm: 4 }}
      py={6}
      sx={{
        backgroundColor: "#111",
        color: "#fff",
        overflowY: "auto",
      }}
      id="about"
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 6,
          color: "#ffd700",
          textShadow: "0 1px 6px rgba(255,215,0,0.5)",
          letterSpacing: 1,
        }}
      >
       Know more About Me
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
        justifyContent="center"
      >
        {/* Profile Image */}
        <Box>
          <Avatar
            src={profilePic}
            alt="Ritul Anand"
            sx={{
              width: { xs: 160, sm: 220, md: 260 },
              height: { xs: 160, sm: 220, md: 260 },
              border: "4px solid #ffd700",
              boxShadow: "0 8px 20px rgba(255,255,255,0.2)",
            }}
          />
        </Box>

        {/* About Description */}
        <Box maxWidth="600px">
          <Typography
            variant="h6"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#ccc",
            }}
          >
            I’m <strong>Ritul Anand</strong>, a passionate Front End Developer with <strong>5.8 years of experience</strong> in building responsive and scalable web applications using <strong>React.js</strong>, <strong>Redux-toolkit</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>Vanilla Javascript</strong>.
            Also, aspiring to be a full stack developer, I have a keen interest in mastering <strong>Node.js</strong> and <strong>Express.js</strong> to create robust back-end solutions.
            I love transforming ideas into real-world solutions with elegant UIs, secure backends, and optimized performance. My goal is to create meaningful digital products and keep growing every day as a developer.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
