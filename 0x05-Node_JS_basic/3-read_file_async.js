const fs = require('fs');

const countStudents = (path) => new Promise((res, rej) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) return rej(new Error('Cannot load the database'));
    let numberOfStudents = 0;
    let studentData = data.split('\n');
    studentData = studentData.slice(1, studentData.length);
    const fields = {};

    for (let student of studentData) {
      if (student === '') break;
      student = student.trim();
      const components = student.split(',');
      const firstName = components[0].trim();
      const field = components[3];

      if (field === undefined || firstName === undefined) break;

      if (field in fields) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }

      numberOfStudents += 1;
    }

    console.log(`Number of students: ${numberOfStudents}`);
    for (const field in fields) {
      if (field) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
    return res('Finished reading file!');
  });
});

module.exports = countStudents;
