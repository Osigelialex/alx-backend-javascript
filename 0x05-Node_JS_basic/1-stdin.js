process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (chunk) => {
  const name = chunk;
  process.stdout.write(`Your name is: ${name}`);
  process.exit();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
