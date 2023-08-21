const fs = require('fs');
const readline = require('readline');

const countStudents = (path) => {
  if (path !== 'database.csv') throw new Error('Cannot load database');

  let count = 0;
  const csMajors = [];
  const sweMajors = [];

  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  rl.on('line', (line) => {
    const field = line.split(',')[3];
    const firstName = line.split(',')[0];

    if (field === 'CS') {
      csMajors.push(firstName);
      count += 1;
    }
    if (field === 'SWE') {
      sweMajors.push(firstName);
      count += 1;
    }
  });

  rl.on('close', () => {
    const csCount = csMajors.length;
    const sweCount = sweMajors.length;

    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csMajors.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweMajors.join(', ')}`);
  });
};

module.exports = countStudents;
