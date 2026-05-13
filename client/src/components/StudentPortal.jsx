import { useState } from "react";
import { getExamById } from "../api/examService";

function StudentPortal() {
  const [examId, setExamId] = useState("");
  const [exam, setExam] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStartExam = () => {
    if (!examId) return;
    setLoading(true);
    setError("");
    setExam(null);
    getExamById(examId)
      .then((data) => {
        setExam(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Exam not found!");
        setLoading(false);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Student Portal</h2>
      <div className="card p-3 mb-4">
        <h5>Enter Exam ID to Start</h5>
        <div className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Exam ID"
            value={examId}
            onChange={(e) => setExamId(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleStartExam}>
            Start
          </button>
        </div>
        {error && <p className="text-danger mt-2">{error}</p>}
      </div>
      {loading && <p>Loading exam...</p>}
      {exam && (
        <div className="card p-3">
          <h4>{exam.title}</h4>
          <ul className="list-group mt-3">
            {exam.questions.map((q) => (
              <li className="list-group-item" key={q.id}>
                {q.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StudentPortal;