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
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";

const CertificateCard = ({ name, organization, issue_date, src, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        boxShadow: "0 12px 32px rgba(255, 215, 0, 0.2)",
      }}
      style={{
        borderRadius: "16px",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "90vw", sm: "360px" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
          overflow: "hidden",
          background: "linear-gradient(180deg, #1a1a1a 0%, #000 100%)",
          color: "#fff",
          transition: "all 0.3s ease",
          border: "1px solid rgba(255, 215, 0, 0.1)",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Header Info */}
        <CardContent
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 2,
            py: 2,
            px: 3,
          }}
        >
          <Avatar sx={{ bgcolor: "#ffd700", color: "#000" }}>
            <SchoolIcon />
          </Avatar>
          <Stack spacing={0.5}>
            <Typography
              variant="h6"
              sx={{ fontSize: "1rem", fontWeight: 600, color: "#ffd700" }}
            >
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              {organization}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "lightgreen", fontSize: "0.75rem" }}
            >
              Issued: {issue_date}
            </Typography>
          </Stack>
        </CardContent>

        {/* Certificate Image */}
        <CardMedia
          component="img"
          alt={name}
          height="160"
          image={src}
          sx={{
            objectFit: "cover",
            borderTop: "2px solid #ffd700",
            borderBottom: "2px solid #ffd700",
            backgroundColor: "#fff",
          }}
        />

        {/* Button */}
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            px: 2,
            pb: 2,
            pt: 1,
            backgroundColor: "#111",
          }}
        >
          <Button
            target="_blank"
            href={link}
            sx={{
              border: "2px solid #ffd700",
              color: "#ffd700",
              fontWeight: 600,
              borderRadius: "25px",
              textTransform: "none",
              px: 3,
              "&:hover": {
                backgroundColor: "#ffd700",
                color: "#000",
                transform: "scale(1.05)",
                boxShadow: "0 4px 12px rgba(255, 215, 0, 0.4)",
              },
            }}
          >
            View Certificate
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default CertificateCard;
