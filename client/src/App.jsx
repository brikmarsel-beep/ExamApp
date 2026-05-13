import { useState } from "react";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentPortal from "./components/StudentPortal";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [role, setRole] = useState(null);

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleLogout = () => {
    setRole(null);
  };

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>E-Test System</h1>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
      {role === "teacher" ? <TeacherDashboard /> : <StudentPortal />}
    </div>
  );
}

export default App;