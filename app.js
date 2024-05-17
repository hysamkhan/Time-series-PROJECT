const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'm.html'));
});

// Define route to serve files based on URL path
app.get('/:filePath(*)', (req, res) => {
    const filePath = req.params.filePath;
    // Construct absolute path
    const absolutePath = path.join(__dirname, filePath);
    // Serve the file
    res.sendFile(absolutePath);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});