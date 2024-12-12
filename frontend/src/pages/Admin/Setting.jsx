import {
  Avatar,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Setting = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 2,
          //   width: "100%",
          borderRadius: 1,
          width: {
            xs: "100%",
            sm: "100%",
            md: "550px",
            lg: "550px",
            xl: "550px",
          },
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
          Change Password
        </Typography>
        <Box
          component="form"
          sx={{
            mt: 1,
          }}
        >
          <TextField
            required
            fullWidth
            id="password"
            type="password"
            label="Old Password"
            placeholder="Enter password"
            sx={{ mb: 3, mt: 3 }}
          />
          <TextField
            required
            fullWidth
            id="password"
            type="password"
            label="New Password"
            placeholder="Enter password"
            sx={{ mb: 3, mt: 3 }}
          />
          <TextField
            required
            fullWidth
            id="password"
            type="password"
            label=" Confirm Password"
            placeholder="Enter password"
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
    </Box>
  );
};

export default Setting;
