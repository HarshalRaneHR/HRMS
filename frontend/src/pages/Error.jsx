import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        px: 2,
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "error.main", mb: 2 }} />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          mb: 1,
        }}
      >
        Oops! Page Not Found
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 3,
        }}
      >
        The page you are looking for doesn’t exist or an error occurred. Please
        check the URL or go back to the homepage.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          borderRadius: "8px",
        }}
      >
        Go to Homepage
      </Button>
    </Box>
  );
};

export default Error;
