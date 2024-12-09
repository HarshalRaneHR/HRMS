import { Box, Paper, Table, TableBody, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";

const columns = [
  { id: "serialNo", label: "S.No.", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "dob", label: "D.O.B", minWidth: 170 },
  { id: "department", label: "Department Name", minWidth: 170 },
  { id: "grade", label: "Grade", minWidth: 170 },
  { id: "action", label: "Action", minWidth: 100, align: "center" },
];

function createData(serialNo, name, department, grade) {
  return { serialNo, name, department, grade };
}

const initialRows = [
  createData(1, "John Boe", "Human Resources", "GET"),
  createData(2, "John2 Boe", "Finance", "GET"),
  createData(3, "John3 Boe", "Engineering", "GET"),
  createData(4, "John4 Boe", "Marketing", "GET"),
  createData(5, "John5 Boe", "Sales", "GET"),
  createData(6, "John6 Boe", "IT Support", "GET"),
  createData(7, "John7 Boe", "Operations", "GET"),
  createData(8, "John8 Boe", "Operations", "GET"),
  createData(9, "John9 Boe", "Operations", "GET"),
  createData(10, "John10 Boe", "Operations", "GET"),
];

const Employees = () => {
  const [openModal, setOpenModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [rows, setRows] = useState([]);
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

  const handleDelete = (serialNo) => {
    setRows(rows.filter((row) => row.serialNo !== serialNo));
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      {!openModal && (
        <>
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
                width: { xs: "100%", sm: "100%", md: "100%", lg: "auto" },
              }}
              onClick={() => setOpenModal(true)}
            >
              Add New Department
            </Button>
          </Box>
          <Box>
            <Paper sx={{ width: "100%", overflow: "hidden" }} elevation={10}>
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
                                <TableCell key={column.id} align={column.align}>
                                  {column.id === "action" ? (
                                    <Box
                                      sx={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                      }}
                                    >
                                      <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() =>
                                          handleDelete(row.serialNo)
                                        }
                                      >
                                        View
                                      </Button>
                                      <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() =>
                                          handleDelete(row.serialNo)
                                        }
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
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Box>
        </>
      )}
      {openModal && <AddEmployee />}
    </Box>
  );
};

export default Employees;
