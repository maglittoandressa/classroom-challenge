const fs = require('fs');

async function print() {
  const data = await fs.readFile('./example.txt', 'utf8');
  console.log(data);
}

print();
