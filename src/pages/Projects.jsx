import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../assets/projectsData";
import LaptopMac from "@mui/icons-material/LaptopMac";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Projects = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#121212",
        p: { xs: 2, sm: 6 },
        color: "#fff",
        position: "relative",
      }}
      id="projects"
    >
      {/* Heading with Icon */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ mb: { sm: 5} }}
      >
        <LaptopMac sx={{ fontSize: 40, color: "#ffd700" }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#ffd700",
            textShadow: "0 1px 5px rgba(255, 215, 0, 0.4)",
          }}
        >
          My Projects
        </Typography>
      </Stack>

      {/* Slider with Arrows and Pagination */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        breakpoints={{
          600: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        style={{
  paddingBottom: "3rem",
  paddingTop: "1.5rem"
}}

      >
        {projectsData.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <IconButton
        className="custom-swiper-prev"
        sx={{
          position: "absolute",
          top: "50%",
          width: "30px",
          left: 10,
          transform: "translateY(-50%)",
          zIndex: 10,
          bgcolor: "#ffd700",
          borderRadius: "4px",
          color: "#222",
          "&:hover": {
            bgcolor: "#ffd700",
            color: "#222",
            boxShadow: "0 0 10px #ffd700",
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        className="custom-swiper-next"
        sx={{
          position: "absolute",
          top: "50%",
          width: "30px",
          right: 10,
          transform: "translateY(-50%)",
          zIndex: 10,
          bgcolor: "#ffd700",
          color: "#222",
          borderRadius: "4px",
          "&:hover": {
            bgcolor: "#ffd700",
            color: "#222",
            boxShadow: "0 0 10px #ffd700",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* Custom Dot Styling */}
      <style>
        {`
          .swiper-pagination-bullet {
            background: #555;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #ffd700;
            transform: scale(1.2);
          }
        `}
      </style>
    </Box>
  );
};

export default Projects;
