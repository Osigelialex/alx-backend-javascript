const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const file = fs.readFileSync(path).toString();
  const lines = file.split('\r');
  let lineCount = 0;

  const csStudents = [];
  const sweStudents = [];

  for (const line of lines) {
    const components = line.split(',');
    const firstName = components[0].trim();
    const field = components[3];

    if (field === 'CS') {
      csStudents.push(firstName);
      lineCount += 1;
    }

    if (field === 'SWE') {
      sweStudents.push(firstName);
      lineCount += 1;
    }
  }

  console.log(`Number of students: ${lineCount}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
};

module.exports = countStudents;
