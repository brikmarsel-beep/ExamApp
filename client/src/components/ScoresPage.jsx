import { useState, useEffect } from "react";
import { mockDb } from "../api/mockDb";

function ScoresPage() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setScores(mockDb.studentScores);
    }, 500);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Student Scores</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Student ID</th>
            <th>Exam ID</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.studentId}</td>
              <td>{score.examId}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScoresPage;