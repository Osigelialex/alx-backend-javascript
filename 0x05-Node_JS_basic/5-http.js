const http = require('http');
const fs = require('fs');

const hostName = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (url === '/students') {
    res.write('This is the list of our students\n');

    if (process.argv.length !== 3) {
      res.end('Cannot load the database\n');
      return;
    }

    const filePath = process.argv[2];
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.end('Cannot load the database\n');
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
  }
});

app.listen(port, hostName);
module.exports = app;
