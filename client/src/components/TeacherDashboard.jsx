import { useState, useEffect } from "react";
import { getAllExams, createExam } from "../api/examService";

function TeacherDashboard() {
  const [exams, setExams] = useState([]);
  const [newExamTitle, setNewExamTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllExams().then((data) => {
      setExams(data);
      setLoading(false);
    });
  }, []);

  const handleCreateExam = () => {
    if (!newExamTitle) return;
    createExam({ title: newExamTitle }).then((newExam) => {
      setExams([...exams, newExam]);
      setNewExamTitle("");
    });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Teacher Dashboard</h2>
      <div className="card p-3 mb-4">
        <h5>Create New Exam</h5>
        <div className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Exam title"
            value={newExamTitle}
            onChange={(e) => setNewExamTitle(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleCreateExam}>
            Create
          </button>
        </div>
      </div>
      <div className="row">
        {exams.map((exam) => (
          <div className="col-md-4 mb-3" key={exam.id}>
            <div className="card p-3">
              <h5>{exam.title}</h5>
              <p>Questions: {exam.questions.length}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherDashboard;