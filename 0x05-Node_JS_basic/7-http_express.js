const express = require('express');
const fs = require('fs');

const app = express();
const port = 1247;

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  if (process.argv.length !== 3) {
    res.end('Cannot load the database');
    return;
  }

  const filePath = process.argv[2];
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.end('Cannot load the database');
      return;
    }

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

      if (!field || !firstName) break;

      if (field in fields) {
        fields[field].push(firstName);
      } else {
        fields[field] = [firstName];
      }

      numberOfStudents += 1;
    }

    res.write(`Number of students: ${numberOfStudents}\n`);
    for (const field in fields) {
      if (field) {
        res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
      }
    }

    res.end();
  });
});

app.listen(port);
module.export = app;
