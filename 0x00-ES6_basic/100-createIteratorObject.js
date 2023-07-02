export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const names = [];
  Object.values(employees).forEach((employee) => employee.forEach((name) => names.push(name)));
  return names;
}
