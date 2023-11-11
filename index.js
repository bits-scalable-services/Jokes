const express = require('express');
const app = express();
const port = 3000;
const routes = require('./service/routes'); // Import your route file

app.use('/api', routes); // Use the route with a prefix (e.g., /api)

app.listen(port, () => {
  
});

