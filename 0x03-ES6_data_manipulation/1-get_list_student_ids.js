export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) return [];
  const studentIds = [];
  studentList.map((student) => studentIds.push(student.id));
  return studentIds;
}
