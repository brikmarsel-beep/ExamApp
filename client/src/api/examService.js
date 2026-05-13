import { mockDb } from './mockDb';

export const getAllExams = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDb.exams);
    }, 500);
  });
};

export const getExamById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exam = mockDb.exams.find((e) => e.id === parseInt(id));
      if (exam) {
        resolve(exam);
      } else {
        reject(new Error("Exam not found"));
      }
    }, 500);
  });
};

export const createExam = (exam) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newExam = {
        ...exam,
        id: mockDb.exams.length + 1,
        questions: []
      };
      mockDb.exams.push(newExam);
      resolve(newExam);
    }, 500);
  });
};