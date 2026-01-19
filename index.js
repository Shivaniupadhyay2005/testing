const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// GET API to test server
app.get('/api/test', (req, res) => {
    res.status(200).json({
        message: 'Server is running successfully!',
        timestamp: new Date(),
        status: 'OK'
    });
});

// GET API to get a welcome message
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the API Server');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Test endpoint: http://localhost:${PORT}/api/test`);
});
