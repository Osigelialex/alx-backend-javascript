const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  const filePath = process.argv[2];
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.send('Cannot load the database');
      return;
    }

    let numberOfStudents = 0;
    let studentData = data.split('\n');
    studentData = studentData.slice(1, studentData.length);
    const fields = { CS: [], SWE: [] };

    for (let student of studentData) {
      if (student === '') break;
      student = student.trim();
      const components = student.split(',');
      const firstName = components[0].trim();
      const field = components[3];

      if (!field || !firstName) break;

      if (field in fields) {
        fields[field].push(firstName);
      }

      numberOfStudents += 1;
    }

    res.write(`Number of students: ${numberOfStudents}\n`);
    res.write(`Number of students in CS: ${fields.CS.length}. List: ${fields.CS.join(', ')}\n`);
    res.write(`Number of students in SWE: ${fields.SWE.length}. List: ${fields.SWE.join(', ')}`);
    res.send();
  });
});

app.listen(port);
module.exports = app;
