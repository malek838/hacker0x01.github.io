const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from rounded-patio-746.fly.dev!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
