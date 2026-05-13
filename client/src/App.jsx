import { useState } from "react";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentPortal from "./components/StudentPortal";
import Login from "./components/Login";
import ScoresPage from "./components/ScoresPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [role, setRole] = useState(null);
  const [showScores, setShowScores] = useState(false);

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleLogout = () => {
    setRole(null);
    setShowScores(false);
  };

  if (!role) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>E-Test System</h1>
        <div className="d-flex gap-2">
          {role === "teacher" && (
            <button
              className="btn btn-info"
              onClick={() => setShowScores(!showScores)}
            >
              {showScores ? "Back to Dashboard" : "View Scores"}
            </button>
          )}
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {role === "teacher" && showScores ? (
        <ScoresPage />
      ) : role === "teacher" ? (
        <TeacherDashboard />
      ) : (
        <StudentPortal />
      )}
    </div>
  );
}

export default App;