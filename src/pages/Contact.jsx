import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  IconButton,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.comments.trim())
      newErrors.comments = "Comments are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_APP_SERVICE_ID;
    const templateID = import.meta.env.VITE_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;

    
    const templateParams = {
      from_name: formData.firstName + " " + formData.lastName,
      from_email: formData.email,
      to_name: "Ritul Anand",
      message: formData.comments,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSnackbar({
          open: true,
          message: "Email sent successfully!",
          severity: "success",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          comments: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setSnackbar({
          open: true,
          message: "Failed to send email. Please try again later.",
          severity: "error",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  const inputStyles = {
    input: { color: "#fff" },
    label: { color: "#aaa" },
    "& .MuiInputLabel-root": {
      color: "#aaa",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#ffd700",
    },
    "& .MuiFilledInput-root": {
      backgroundColor: "rgba(255,255,255,0.05)",
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.08)",
      },
      "&.Mui-focused": {
        backgroundColor: "rgba(255,255,255,0.1)",
      },
    },
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#ffd700",
            fontWeight: "bold",
            textShadow: "0 2px 8px rgba(255, 215, 0, 0.3)",
            mb: 3,
            textAlign: "center",
          }}
        >
          Let's Connect
        </Typography>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backdropFilter: "blur(12px)",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "16px",
            padding: "2rem",
            width: "100%",
            maxWidth: 520,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <Stack direction="row" spacing={2}>
            <TextField
              id="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              fullWidth
              variant="filled"
              sx={inputStyles}
            />
            <TextField
              id="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              fullWidth
              variant="filled"
              sx={inputStyles}
            />
          </Stack>

          <TextField
            id="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            fullWidth
            variant="filled"
            sx={inputStyles}
          />

          <TextField
            id="comments"
            label="Message"
            multiline
            rows={4}
            value={formData.comments}
            onChange={handleChange}
            error={!!errors.comments}
            helperText={errors.comments}
            fullWidth
            variant="filled"
            sx={{
              ...inputStyles,
              textarea: { color: "#fff" },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            sx={{
              backgroundColor: "#ffd700",
              color: "#000",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#e6c200",
              },
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </motion.div>

      <Divider
        sx={{
          my: 4,
          width: "100%",
          maxWidth: 480,
          borderColor: "rgba(255,255,255,0.2)",
        }}
      />

      <Typography variant="body1" sx={{ color: "#fff", mb: 1 }}>
        You can also reach me here:
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <IconButton
          href="https://github.com/ritul-ui"
          target="_blank"
          sx={{ color: "#fff" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://api.whatsapp.com/send?phone=917908253982&text=Hello,%20Ritul%20I%20want%20to%20connect%20with%20you."
          target="_blank"
          sx={{ color: "#25D366" }}
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          href="mailto:ritulanand1996@gmail.com"
          target="_blank"
          sx={{ color: "#c71610" }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton href="tel:+917908253982" sx={{ color: "#4CAF50" }}>
          <PhoneInTalkIcon />
        </IconButton>
      </Stack>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
