const fs = require('fs');
fs.readFile('path/to/file', 'utf8', (error, data) => {
  if (error) throw error;
  console.log(data);
});
