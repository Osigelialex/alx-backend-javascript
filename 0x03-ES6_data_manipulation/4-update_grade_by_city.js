export default function updateStudentGradeByCity(students, city, newGrade) {
  const studentsInCity = students.filter((s) => s.location === city);
  studentsInCity.map((s) => {
    const updatedGrade = newGrade.filter((g) => g.studentId === s.id);
    const student = s;

    if (updatedGrade.length === 0) {
      student.grade = 'N/A';
    } else {
      student.grade = updatedGrade[0].grade;
    }

    return student.grade;
  });

  return studentsInCity;
}
