import { Box, Divider } from "@mui/material";
import CustomCard from "../../components/CustomCard";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BusinessIcon from "@mui/icons-material/Business";
import GradeIcon from "@mui/icons-material/Grade";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useState } from "react";

const Dashboard = () => {
  const [events, setEvents] = useState([
    { title: "Event 1", date: "2024-12-10" },
    { title: "Event 2", date: "2024-12-12" },
  ]);

  const handleDateClick = (info) => {
    alert(`Date clicked: ${info.dateStr}`);
  };

  const handleEventClick = (info) => {
    alert(`Event clicked: ${info.event.title}`);
  };

  return (
    <Box px={2}>
      <Box sx={{ mb: 4 }}>
        <h1
          style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
        >
          Dashboard
        </h1>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          },
          gap: 3,
          mb: 3,
        }}
      >
        <CustomCard
          title="Total Admin"
          value="1"
          icon={<SupervisorAccountIcon />}
        />
        <CustomCard title="Total Employees" value="500" icon={<PeopleIcon />} />
        <CustomCard
          title="Total Departments"
          value="8"
          icon={<BusinessIcon />}
        />
        <CustomCard title="Total Grades" value="6" icon={<GradeIcon />} />{" "}
        <CustomCard
          title="Total Salary Paid"
          value="$1,500,000"
          icon={<AttachMoneyIcon />}
        />
      </Box>
      <Divider />
    </Box>
  );
};

export default Dashboard;
