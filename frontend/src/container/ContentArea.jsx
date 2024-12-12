import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Sidebar from "../pages/Admin/Sidebar";
import Error from "../pages/Error";
import Dashboard from "../pages/Admin/Dashboard";
import Department from "../pages/Admin/Department";
import Employees from "../pages/Admin/Employees";
import Grades from "../pages/Admin/Grades";
import Leaves from "../pages/Admin/Leaves";
import ViewEmployee from "../pages/Admin/ViewEmployee";
import Setting from "../pages/Admin/Setting";
import Attendance from "../pages/Admin/Attendance";
import Project from "../pages/Admin/Project";
const ContentArea = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            // element={<Login />}
            element={<Navigate to={"/dashboard"} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="employees" element={<Employees />}>
              <Route path=":id" element={<ViewEmployee />} />
            </Route>
            <Route path="department" element={<Department />} />
            <Route path="grades" element={<Grades />} />
            <Route path="manage-leaves" element={<Leaves />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="project" element={<Project />} />
            <Route path="setting" element={<Setting />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default ContentArea;
