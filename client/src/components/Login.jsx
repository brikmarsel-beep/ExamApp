import { useState } from "react";

function Login({ onLogin }) {
  const [role, setRole] = useState("teacher");

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4">
            <h3 className="text-center mb-4">Login</h3>
            <div className="mb-3">
              <label className="form-label">Select Role</label>
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
            </div>
            <button
              className="btn btn-primary w-100"
              onClick={() => onLogin(role)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;