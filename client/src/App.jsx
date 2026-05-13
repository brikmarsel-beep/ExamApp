import { useState } from "react";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentPortal from "./components/StudentPortal";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [role, setRole] = useState("teacher");

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>E-Test System</h1>
        <button
          className="btn btn-secondary"
          onClick={() =>
            setRole(role === "teacher" ? "student" : "teacher")
          }
        >
          {role === "teacher"
            ? "Switch to Student View"
            : "Switch to Teacher View"}
        </button>
      </div>
      {role === "teacher" ? <TeacherDashboard /> : <StudentPortal />}
    </div>
  );
}

export default App;