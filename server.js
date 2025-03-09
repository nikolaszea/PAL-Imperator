const WebSocket = require('ws');
const express = require('express');
const multer = require('multer');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Set up middleware to handle file uploads
const upload = multer({ dest: 'uploads/' });

// Endpoint to handle file uploads
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send({
    message: 'File uploaded successfully',
    file: req.file,
  });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// All other requests return the React app, so it can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);
    ws.send('Hello, client');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

const port = 3001; // Ensure this port is not used by another service
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
