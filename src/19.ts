const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const user = { name: 'Alice', age: 25 };
  res.send(user);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
