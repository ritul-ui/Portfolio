import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

const ProjectCard = ({
  name,
  date,
  avatar,
  media,
  description,
  github_link,
  hosted_link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        rotate: 0.5,
        boxShadow: "0 12px 24px rgba(255, 215, 0, 0.25)",
      }}
      style={{
        borderRadius: "20px",
        transition: "all 0.3s ease-in-out",
        perspective: 1000,
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "90vw", sm: "360px" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          overflow: "hidden",
          background: "linear-gradient(145deg, #1b1b1b, #121212)",
          border: "1px solid rgba(255, 215, 0, 0.15)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
          color: "#fff",
        }}
      >
        {/* Header */}
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            py: 2,
            px: 3,
            bgcolor: "transparent",
          }}
        >
          <Avatar
            src={avatar}
            alt={name}
            sx={{
              bgcolor: "#fff",
              color: "#000",
              fontWeight: "bold",
              fontSize: "1rem",
              border: "2px solid #ffd700",
            }}
          >
            {name?.charAt(0)}
          </Avatar>
          <Stack>
            <Typography
              component="div"
              variant="h6"
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#ffd700",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#ccc",
                fontSize: "0.75rem",
              }}
            >
              {date}
            </Typography>
          </Stack>
        </CardContent>

        {/* Image */}
        <motion.div whileHover={{ scale: 1.015 }}>
          <CardMedia
            component="img"
            height="180"
            image={media}
            alt={name}
            sx={{
              objectFit: "cover",
              borderTop: "2px solid #ffd700",
              borderBottom: "2px solid #ffd700",
              filter: "brightness(0.95)",
            }}
          />
        </motion.div>

        {/* Description */}
        <CardContent
          sx={{
            flexGrow: 1,
            px: 3,
            py: 2,
            bgcolor: "rgba(255,255,255,0.03)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#ddd",
              fontSize: "0.9rem",
              fontWeight: 400,
              lineHeight: 1.5,
            }}
          >
            {description}
          </Typography>
        </CardContent>

        {/* Buttons */}
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 2,
            pb: 2,
            pt: 1,
            gap: 1,
          }}
        >
          <Button
            target="_blank"
            href={github_link}
            endIcon={<GitHubIcon />}
            sx={{
              flex: 1,
              border: "2px solid #ffd700",
              color: "#ffd700",
              fontWeight: 600,
              borderRadius: "25px",
              fontSize: "0.8rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ffd700",
                color: "#000",
                boxShadow: "0 4px 14px rgba(255, 215, 0, 0.5)",
                transform: "translateY(-2px)",
              },
            }}
          >
            GitHub
          </Button>
          <Button
            target="_blank"
            href={hosted_link}
            endIcon={<LaunchIcon />}
            sx={{
              flex: 1,
              border: "2px solid #ffd700",
              color: "#ffd700",
              fontWeight: 600,
              borderRadius: "25px",
              fontSize: "0.8rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ffd700",
                color: "#000",
                boxShadow: "0 4px 14px rgba(255, 215, 0, 0.5)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Visit
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
