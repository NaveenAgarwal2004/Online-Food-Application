const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// Dynamic CORS configuration
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.startsWith('http://localhost:')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

// Serve static files from the 'public' folder
app.use('/assets', express.static(path.join(__dirname, 'Public/Assest')));

// Middleware to parse JSON
app.use(express.json());

// Sample data
const menuData = require('./data/menuData.json');
const mockData = require('./data/mockData.json');

// API endpoints
app.get('/api/menu', (req, res) => {
  res.json(menuData);
});

app.get('/api/about', (req, res) => {
  res.json(mockData);
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});