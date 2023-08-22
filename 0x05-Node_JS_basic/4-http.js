const http = require('http')

const hostName = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
})

app.listen(port, hostName);
module.exports = app;