import { Box, Button, Paper, Typography, Avatar, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BoyIcon from "@mui/icons-material/Boy";
import GirlIcon from "@mui/icons-material/Girl";

const ViewEmployee = (props) => {
  const { setShowType } = props;
  const employee = {
    name: "John Doe",
    mail: "john.doe@example.com",
    phone: "1234567890",
    role: "Software Engineer",
    dob: "1990-01-01",
    department: "IT",
    grade: "A",
    address: "123 Main St, Cityville ",
    salary: "$100,000",
    joiningDate: "2020-01-15",
    gender: "Male",
  };

  const {
    name,
    mail,
    phone,
    role,
    dob,
    department,
    grade,
    address,
    salary,
    joiningDate,
    gender,
  } = employee;
  return (
    <Box
      sx={{
        mx: "auto",
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "600px",
          xl: "600px",
        },
      }}
    >
      <Paper elevation={10} sx={{ p: 3 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h4" component="h1">
            Employee Details
          </Typography>
          <Avatar sx={{ width: 80, height: 80, bgcolor: "primary.main" }}>
            {gender.toLowerCase() === "male" ? (
              <BoyIcon fontSize="large" />
            ) : (
              <GirlIcon fontSize="large" />
            )}
          </Avatar>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Name:</strong> {name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Email:</strong> {mail}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Phone:</strong> {phone}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Role:</strong> {role}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Date of Birth:</strong> {dob}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Department:</strong> {department}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Grade:</strong> {grade}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Address:</strong> {address}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Salary:</strong> {salary}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              <strong>Joining Date:</strong> {joiningDate}
            </Typography>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<ArrowBackIcon />}
            onClick={() => setShowType("")}
          >
            Back
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ViewEmployee;
