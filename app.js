const express = require('express');
const path = require('path'); // Import the path module
const cors = require('cors'); // Import the path module

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());
// Serve the index.html file for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle geolocation
app.post('/geolocation', (req, res) => {
  
  const { latitude, longitude } = req.body;
  console.log(req.body);

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  // Do something with the geolocation data
  console.log("ip address =====>", ipAddress)
  console.log(`Received geolocation: ${latitude}, ${longitude}`);

  // Send a response
  res.json({ message: 'Geolocation received successfully'+latitude+" "+longitude });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
