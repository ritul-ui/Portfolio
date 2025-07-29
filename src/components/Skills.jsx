import { Box, Grid, Paper, Tooltip, Typography, Avatar, Stack } from "@mui/material";
import React from "react";
import skillData from "../assets/skillData";
import BuildIcon from "@mui/icons-material/Build"; // or use CodeIcon, EmojiObjects, etc.

const Skills = () => {
  return (
    <Box
      sx={{
        overflowY: "auto",
        px: { xs: 2, sm: 4 },
        py: 4,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
      id="skills"
    >
      <Stack
        direction="row"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 4 }}
      >
        <BuildIcon sx={{ fontSize: 36, color: "#ffd700", mb: "2px" }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#ffd700",
            textShadow: "0 1px 5px rgba(255,215,0,0.3)",
          }}
        >
          My Skills
        </Typography>
      </Stack>

      <Grid container spacing={3} justifyContent="center">
        {skillData.map((skill) => (
          <Grid item xs={4} sm={3} md={2} key={skill.id}>
            <Tooltip
              title={`${skill.name} - ${skill.progress}%`}
              arrow
              placement="top"
              enterDelay={200}
            >
              <Paper
                elevation={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "#1e1e1e",
                  border: "1px solid #333",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.08)",
                    boxShadow: "0 6px 20px rgba(255, 215, 0, 0.3)",
                  },
                }}
              >
                <Avatar
                  src={skill.src}
                  alt={skill.name}
                  sx={{ width: 50, height: 50, mb: 1, bgcolor: "#fff" }}
                />
                <Typography
                  variant="body2"
                  sx={{ color: "#fff", fontWeight: 500, textAlign: "center", fontSize: "0.85rem" }}
                >
                  {skill.name}
                </Typography>
              </Paper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
