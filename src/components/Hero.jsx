import React, { useEffect, useState } from "react";
import { Button, Stack, Typography, Box, IconButton } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import WidgetsIcon from "@mui/icons-material/Widgets";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import profilePic from "../assets/profileimg.png";
import resume from "../assets/Ritul_Anand_cn_resume.pdf";
import axios from "axios";
import { AccessAlarm } from "@mui/icons-material";

const Hero = ({refs}) => {
  const [time, setTime] = useState(new Date());
  const [joke, setJoke] = useState("");

  // Clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Joke
  useEffect(() => {
    const fetchJoke = async () => {
      const { data } = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      setJoke(data.joke);
    };

    fetchJoke();
    const jokeInterval = setInterval(fetchJoke, 10000);
    return () => clearInterval(jokeInterval);
  }, []);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
      sx={{
        perspective: "1500px",
        overflow: "hidden",
        padding: "2rem",
        position: "relative",
      }}
    >
{/* Top Banner Row */}
<Box
  sx={{
    position: {xs: "initial", sm:"absolute"},
    top: 0,
    left: 0,
    width: "100%",
    px: 2,
    py: 1,
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
    gap: { xs: 1, sm: 0 },
  }}
>
  {/* Clock */}
  <Box
    sx={{
      color: "#ffd700",
      display: "flex",
      alignItems: "center",
      fontSize: { xs: "0.8rem", sm: "1rem" },
      fontWeight: "bold",
    }}
  >
    <AccessAlarm sx={{ mr: 1 }} />
    {time.toLocaleTimeString()}
  </Box>

  {/* Event Line */}
  <Box
  my={"2rem"}
    sx={{
      
      
      background: "#333",
      color: "#ffd700",
      px: 2,
      py: 0.5,
      borderRadius: "10px",
      fontSize: "0.85rem",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(255,255,100,0.3)",
    }}
  >
    🚀 Building something awesome today!
  </Box>
</Box>






      {/* Motion Wrapper */}
      <motion.div
        initial={{ opacity: 0, rotateX: 15, rotateY: -15, scale: 0.9 }}
        animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          transformStyle: "preserve-3d",
          marginTop: "2.5rem"
        }}
      >
        {/* Profile */}
        <motion.img
          src={profilePic}
          alt="Ritul Anand"
          width="220"
          whileHover={{ scale: 1.07, rotateY: 2 }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{
            border: "4px solid #ffd700",
            borderRadius: "20%",
            boxShadow: "0 15px 30px rgba(255, 255, 255, 0.3)",

          }}
        />

        {/* Intro Text */}
        <Typography
          sx={{
            fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.5rem" },
            color: "#fff",
            letterSpacing: "3px",
            fontWeight: 500,
            textShadow: "0px 1px 6px rgba(255, 255, 0, 0.4)",
            textTransform: "uppercase",
          }}
        >
          Hi, I'm Ritul Anand
        </Typography>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
              color: "#ffd700",
              fontWeight: "bold",
              textShadow: "0 4px 15px rgba(255, 215, 0, 0.5)",
            }}
          >
            Full Stack Developer
          </Typography>
        </motion.div>

        {/* Buttons */}
        <Stack gap="1rem" direction={{ xs: "column", md: "row" }} alignItems="center">
          <Button
            href={resume}
            download="Ritul_Anand_cn_resume.pdf"
            target="_blank"
            endIcon={<CloudDownloadIcon />}
            sx={{
              background: "#ffd700",
              color: "#000",
              paddingInline: { xs: "1rem", md: "1.5rem" },
              fontWeight: 600,
              fontSize: "1rem",
              borderRadius: "50px",
              boxShadow: "0 4px 15px rgba(255, 255, 100, 0.4)",
              '&:hover': {
                background: "#fff68f",
                transform: "scale(1.05)",
                boxShadow: "0 6px 20px rgba(255, 255, 100, 0.6)",
              },
            }}
          >
            Download CV
          </Button>

        <Stack direction="row" gap="1rem">
  <Button
    onClick={() =>
      refs?.projectsRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    endIcon={<WidgetsIcon />}
    sx={{
      border: "2px solid #ffd700",
      color: "#ffd700",
      paddingInline: { xs: "1rem", md: "1.5rem" },
      borderRadius: "50px",
      fontWeight: 600,
      "&:hover": {
        background: "#ffd700",
        color: "#000",
        transform: "scale(1.05)",
        boxShadow: "0 4px 15px rgba(255, 255, 100, 0.4)",
      },
    }}
  >
    Projects
  </Button>

  <Button
    onClick={() =>
      refs?.contactRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
    endIcon={<PermContactCalendarIcon />}
    sx={{
      border: "2px solid #ffd700",
      color: "#ffd700",
      paddingInline: { xs: "1rem", md: "1.5rem" },
      borderRadius: "50px",
      fontWeight: 600,
      "&:hover": {
        background: "#ffd700",
        color: "#000",
        transform: "scale(1.05)",
        boxShadow: "0 4px 15px rgba(255, 255, 100, 0.4)",
      },
    }}
  >
    Contact
  </Button>
</Stack>

        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={2} mt={3}>
          {[
            { icon: <GitHubIcon />, link: "https://github.com/ritul-ui" },
            { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/ritul-anand/" }
          ].map(({ icon, link }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                component="a"
                href={link}
                target="_blank"
                sx={{ color: "#ffd700", border: "1px solid #ffd700" }}
              >
                {icon}
              </IconButton>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
        <Box
  sx={{
    display: {xs: "none", md: "block"},
    position: {md:"absolute"},
    bottom: { xs: "6rem", sm: "3rem" },
    right: "1rem",
    width: { xs: "80%", sm: "300px" },
    color: "#fff",
    fontStyle: "italic",
    fontSize: "0.85rem",
    textAlign: "right",
    opacity: 0.7,
    zIndex: 1,
  }}
>
  {joke}
</Box>
    </Stack>
  );
};

export default Hero;
