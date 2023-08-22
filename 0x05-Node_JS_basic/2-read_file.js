const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const file = fs.readFileSync(path, 'utf8').toString();
  let lines = file.split('\r');
  lines = lines.slice(1, lines.length);
  const fields = {};

  for (const line of lines) {
    const components = line.split(',');
    const firstName = components[0].trim();
    const field = components[3];

    if (field in fields) {
      fields[field].push(firstName);
    } else {
      fields[field] = [firstName];
    }
  }

  console.log(`Number of students: ${lines.length}`);
  for (const field in fields) {
    if (field) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  }
};

module.exports = countStudents;
