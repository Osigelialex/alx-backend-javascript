const fs = require('fs');

const countStudents = (path) => {
  try {
    const file = fs.readFileSync(path, 'utf8').toString();
    let lines = file.split('\r\n');
    lines = lines.slice(1, lines.length);
    let numberOFStudents = 0;
    const fields = {};

    for (let line of lines) {
      if (line === '') break;
      line = line.trim();
      const components = line.split(',');
      const firstName = components[0].trim();
      const field = components[3];

      if (field === undefined || firstName === undefined || field === undefined) break;

      if (field in fields) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }

      numberOFStudents += 1;
    }

    console.log(`Number of students: ${numberOFStudents}`);
    for (const field in fields) {
      if (field) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
