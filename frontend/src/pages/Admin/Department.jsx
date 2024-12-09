import {
  Box,
  Modal,
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

const columns = [
  { id: "serialNo", label: "S.No.", minWidth: 50 },
  { id: "name", label: "Department Name", minWidth: 170 },
  { id: "action", label: "Action", minWidth: 100 },
];

function createData(serialNo, name) {
  return { serialNo, name };
}

const initialRows = [
  createData(1, "Human Resources"),
  createData(2, "Finance"),
  createData(3, "Engineering"),
  createData(4, "Marketing"),
  createData(5, "Sales"),
  createData(6, "IT Support"),
  createData(7, "Operations"),
];

const Department = () => {
  const [openModal, setOpenModal] = useState(false);
  const [addDepObj, setAddDepObj] = useState({
    depName: "",
    description: "",
  });
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: "95%",
      sm: "95%",
      md: "600px",
      lg: "600px",
      xl: "600px",
    },
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  const handleAddDep = (e) => {
    console.log(addDepObj);
    e.preventDefault();
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Box>
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
          label="Search Departments"
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
          <TableContainer sx={{ maxHeight: 550 }}>
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
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                                <Button
                                  variant="contained"
                                  color="secondary"
                                  onClick={() => handleDelete(row.serialNo)}
                                >
                                  Delete
                                </Button>
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
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} component="form" onSubmit={handleAddDep}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}
            >
              Add New Department
            </Typography>
            <TextField
              label="Department Name"
              placeholder="Department Name"
              required
              fullWidth
              variant="outlined"
              name="depName"
              value={addDepObj.depName}
              onChange={(e) =>
                setAddDepObj({ ...addDepObj, [e.target.name]: e.target.value })
              }
              sx={{ mb: 3 }}
            />
            <TextField
              placeholder="Department Description"
              label="Department Description"
              fullWidth
              variant="outlined"
              multiline
              rows={6}
              name="description"
              value={addDepObj.description}
              onChange={(e) =>
                setAddDepObj({ ...addDepObj, [e.target.name]: e.target.value })
              }
              sx={{ mb: 3 }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                // onClick={handleAdd}
                sx={{ px: 4 }}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Department;
