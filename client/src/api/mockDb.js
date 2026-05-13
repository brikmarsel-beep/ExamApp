export const mockDb = {
  exams: [
    {
      id: 1,
      title: "JavaScript Basics",
      questions: [
        { id: 1, text: "What is a variable?" },
        { id: 2, text: "What is a function?" },
        { id: 3, text: "What is an array?" }
      ]
    },
    {
      id: 2,
      title: "React Fundamentals",
      questions: [
        { id: 1, text: "What is a component?" },
        { id: 2, text: "What is useState?" },
        { id: 3, text: "What is useEffect?" }
      ]
    }
  ],
  studentScores: [
    { studentId: 1, examId: 1, score: 85 },
    { studentId: 2, examId: 1, score: 90 },
    { studentId: 1, examId: 2, score: 78 }
  ]
}