"use client";

import { Paper, Typography, Box } from "@mui/material";

const CustomCard = (props) => {
  const { title, value, icon } = props;

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "220px",
        height: "100%",
        minWidth: "260px",
        borderRadius: "10px",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 1,
            color: "primary.main",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: "medium",
            color: "text.primary",
          }}
        >
          {value}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
        }}
      >
        {icon}
      </Box>
    </Paper>
  );
};

export default CustomCard;
