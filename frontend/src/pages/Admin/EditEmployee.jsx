import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";

const style = {
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const departments = [
  "Human Resources",
  "Finance",
  "Engineering",
  "Marketing",
  "Sales",
  "IT",
  "Operations",
];

const EditEmployee = (props) => {
  const { setShowType } = props;
  const [addEmpObj, setAddEmpObj] = useState(null);

  useEffect(() => {
    setAddEmpObj({
      name: "John Doe",
      phone: "1234567890",
      role: "Software Engineer",
      dob: "1990-01-01",
      department: "IT",
      gender: "Male",
      grade: "A",
      address: "123 Main St, Cityville ",
      salary: "$100,000",
      joiningDate: "2020-01-15",
    });
  }, []);

  const handleAddEmp = (e) => {
    console.log(addEmpObj);
    e.preventDefault();
  };
  const actionClickHandler = (e, type) => {
    switch (type) {
      case "back":
        setShowType("");
        break;

      default:
        break;
    }
  };

  return (
    <Box sx={style} component="form" onSubmit={handleAddEmp}>
      {addEmpObj ? (
        <>
          <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
            Add New Employee
          </Typography>

          <Grid container spacing={2} py={4}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Employee Name"
                placeholder="Name"
                required
                fullWidth
                variant="outlined"
                value={addEmpObj.name}
                onChange={(e) =>
                  setAddEmpObj({ ...addEmpObj, name: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                placeholder="Phone"
                required
                fullWidth
                variant="outlined"
                value={addEmpObj.phone}
                onChange={(e) =>
                  setAddEmpObj({ ...addEmpObj, phone: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                type="date"
                required
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={addEmpObj.dob}
                onChange={(e) =>
                  setAddEmpObj({ ...addEmpObj, dob: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Role"
                placeholder="Role"
                required
                fullWidth
                variant="outlined"
                value={addEmpObj.role}
                onChange={(e) =>
                  setAddEmpObj({ ...addEmpObj, role: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Department"
                placeholder="Department"
                required
                fullWidth
                variant="outlined"
                value={addEmpObj.department}
                onChange={(e) =>
                  setAddEmpObj({ ...addEmpObj, department: e.target.value })
                }
              >
                {departments.map((dep, _idx) => (
                  <MenuItem key={_idx} value={dep}>
                    {dep}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                label="Gender"
                required
                fullWidth
                variant="outlined"
                value={addEmpObj.gender}
                onChange={(e) =>
                  setAddEmpObj({ ...addEmpObj, gender: e.target.value })
                }
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Grade"
                placeholder="Grade"
                required
                fullWidth
                variant="outlined"
                value={addEmpObj.grade}
                onChange={(e) =>
                  setAddEmpObj({ ...addEmpObj, grade: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Joining Date"
                type="date"
                required
                fullWidth
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={addEmpObj.joiningDate}
                onChange={(e) =>
                  setAddEmpObj({ ...addEmpObj, joiningDate: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Salary"
                placeholder="Salary"
                required
                fullWidth
                variant="outlined"
                value={addEmpObj.salary}
                onChange={(e) =>
                  setAddEmpObj({ ...addEmpObj, salary: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Address"
                placeholder="Address"
                required
                multiline
                fullWidth
                rows={6}
                variant="outlined"
                value={addEmpObj.address}
                onChange={(e) =>
                  setAddEmpObj({ ...addEmpObj, address: e.target.value })
                }
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              startIcon={<AddIcon />}
              onClick={(e) => actionClickHandler(e, "edit")}
            >
              Edit Employee
            </Button>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<ArrowBackIcon />}
              onClick={(e) => actionClickHandler(e, "back")}
            >
              Back
            </Button>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default EditEmployee;
