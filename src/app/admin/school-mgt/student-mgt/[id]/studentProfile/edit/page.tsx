import StudentProfileFrom from "@/app/admin/_components/StudentProfileFrom";
import React from "react";

const subjectList = [
  "Mathematics",
  "English Language",
  "Yoruba",
  "Basic Science",
  "Social Studies",
  "Fine Arts/Creative Art",
  "Agricultural Science",
  "Civic Education",
  "Christian Religion Studies",
  "Physical and Health Education",
  "Business Studies",
  "French",
  "Computer Studies",
  "Home Economics",
  "Music",
  "Basic Technology",
];

const student = {
  id: "1",
  name: "test",
  email: "austinsamuel733@gmail.com",
  gender: "test",
  class: "test",
  subject: subjectList,
  country: "test",
  state: "test",
  prevSchool: "test",
  extraLesson: "test",
  guardianName: "test",
  guardianEmail: "austinsamuel733@gmail.com",
  guardianPhone: 2348054815965,
  image: "",
};

export default function EditStudentProfile() {
  return (
    <>
      <StudentProfileFrom formAction="Edit" student={student} />
    </>
  );
}
