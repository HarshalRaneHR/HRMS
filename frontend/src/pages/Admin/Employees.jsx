import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ViewEmployee from "./ViewEmployee";
import EditEmployee from "./EditEmployee";

const columns = [
  { id: "serialNo", label: "S.No.", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "dob", label: "D.O.B", minWidth: 170 },
  { id: "department", label: "Department Name", minWidth: 170 },
  { id: "grade", label: "Grade", minWidth: 120 },
  { id: "action", label: "Action", minWidth: 100, align: "center" },
];

function createData(serialNo, name, dob, department, grade, action) {
  return { serialNo, name, dob, department, grade, action };
}

const initialRows = [
  createData(1, "John Boe", "01-01-1990", "Human Resources", "GET", 1),
  createData(2, "Alice Smith", "01-01-1991", "Finance", "GET", 2),
  createData(3, "Bob Johnson", "01-01-1992", "Engineering", "GET", 3),
  createData(4, "Jack White", "01-01-1993", "Marketing", "GET", 4),
  createData(5, "Grace Taylor", "01-01-1994", "Sales", "GET", 5),
  createData(6, "Henry Brown", "01-01-1995", "IT Support", "GET", 6),
  createData(7, "Frank Moore", "01-01-1996", "Operations", "GET", 7),
  createData(8, "Emily Davis", "01-01-1997", "Operations", "GET", 8),
  createData(9, "David Wilson", "01-01-1998", "Operations", "GET", 9),
  createData(10, "Ivy Martinez", "01-01-1999", "Operations", "GET", 10),
];

const Employees = () => {
  const [showType, setShowType] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [rows, setRows] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    setRows(initialRows);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const actionClickHandler = (id, type) => {
    setShowType(type);
    // console.log(id);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredRows = rows?.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {showType === "" && (
        <>
          {rows ? (
            <Box>
              {!openModal && (
                <>
                  <Typography variant="h4" textAlign="center" py={1}>
                    Employees List
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "flex-end",
                        sm: "flex-end",
                        md: "flex-end",
                        lg: "space-between",
                        xl: "space-between",
                      },
                      mb: 3,
                      flexWrap: "wrap",
                      gap: 3,
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <TextField
                      label="Search Employee"
                      placeholder="Employee Name"
                      fullWidth
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "100%",
                          md: "100%",
                          lg: "400px",
                          xl: "400px",
                        },
                      }}
                      variant="outlined"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<AddIcon />}
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "100%",
                          md: "100%",
                          lg: "auto",
                        },
                      }}
                      onClick={() => setOpenModal(true)}
                    >
                      Add New Employee
                    </Button>
                  </Box>
                  <Box>
                    <Paper
                      sx={{ width: "100%", overflow: "hidden" }}
                      elevation={10}
                    >
                      <TableContainer sx={{ maxHeight: 760 }}>
                        <Table stickyHeader aria-label="sticky table">
                          <TableHead>
                            <TableRow>
                              {columns.map((column) => (
                                <TableCell
                                  key={column.id}
                                  align={column.align}
                                  style={{
                                    minWidth: column.minWidth,
                                    fontWeight: "bold",
                                  }}
                                >
                                  {column.label}
                                </TableCell>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {filteredRows
                              .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                              )
                              .map((row) => {
                                return (
                                  <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={row.serialNo}
                                  >
                                    {columns.map((column) => {
                                      const value = row[column.id];
                                      return (
                                        <TableCell
                                          key={column.id}
                                          align={column.align}
                                        >
                                          {column.id === "action" ? (
                                            <Box
                                              sx={{
                                                display: "flex",
                                                justifyContent: "space-around",
                                                gap: 1,
                                              }}
                                            >
                                              <Button
                                                variant="contained"
                                                color="primary"
                                                // color="secondary"
                                                onClick={() =>
                                                  actionClickHandler(
                                                    row.action,
                                                    "view"
                                                  )
                                                }
                                                startIcon={<VisibilityIcon />}
                                              >
                                                View
                                              </Button>
                                              <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() =>
                                                  actionClickHandler(
                                                    row.action,
                                                    "edit"
                                                  )
                                                }
                                                startIcon={<EditIcon />}
                                              >
                                                Edit
                                              </Button>
                                            </Box>
                                          ) : column.id === "serialNo" ? (
                                            value
                                          ) : (
                                            value
                                          )}
                                        </TableCell>
                                      );
                                    })}
                                  </TableRow>
                                );
                              })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      {filteredRows.length > 0 ? (
                        <TablePagination
                          rowsPerPageOptions={[10, 25, 100]}
                          component="div"
                          count={filteredRows.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                      ) : (
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{ px: 2, py: 4, textAlign: "center" }}
                          >
                            No Record to display.
                          </Typography>
                        </Box>
                      )}
                    </Paper>
                  </Box>
                </>
              )}
              {openModal && <AddEmployee setOpenModal={setOpenModal} />}
            </Box>
          ) : (
            <Box
              sx={{
                height: "85vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </>
      )}
      {showType === "view" && <ViewEmployee setShowType={setShowType} />}
      {showType === "edit" && <EditEmployee setShowType={setShowType} />}
    </>
  );
};

export default Employees;
