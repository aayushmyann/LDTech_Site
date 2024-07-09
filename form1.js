const express = require('express');
const app = express();
const port = 4000;

// Define an API endpoint
app.get('db.json', (req, res) => {
  // Perform some logic to retrieve the data
  const data = ['name', 'email', 'subject', 'message'];

  // Send the data as a response
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
