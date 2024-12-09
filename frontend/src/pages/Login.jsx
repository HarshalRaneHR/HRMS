import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={20}
        sx={{
          padding: 2,
          width: "100%",
          minHeight: "400px",
          borderRadius: 4,
        }}
      >
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
            mb: 3,
          }}
        ></Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Sign In
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            id="email"
            label="E-Mail"
            placeholder="Enter E-mail"
            defaultValue={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Please enter a valid email address." : ""}
            sx={{ mb: 3, mt: 3 }}
          />
          <TextField
            required
            fullWidth
            id="password"
            type="password"
            label="Password"
            placeholder="Enter Password"
            sx={{ mb: 3, mt: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            size="large"
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
