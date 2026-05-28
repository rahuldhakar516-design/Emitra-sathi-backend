const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Request Logging Middleware
app.use((req, res, next) => {
    console.log(`[Request] ${req.method} ${req.url}`);
    next();
});

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Enable JSON body parsing
app.use(express.json());

// Serve static files from 'backend' and 'frontend' folders
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Handle the root path to serve index.html from frontend
app.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'));
    } catch (err) {
        console.error("Error serving index.html:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Global Express Error Handling Middleware
// Prevents any unhandled routing or controller errors from crashing the Node process
app.use((err, req, res, next) => {
    console.error('\n[EXPRESS ERROR LOG]:', err);
    if (!res.headersSent) {
        res.status(500).json({ error: 'Internal Server Error', message: err.message || err });
    }
});

// Catch Uncaught Exceptions globally
// Ensures the Node.js process stays alive even if an unexpected sync or thread error occurs
process.on('uncaughtException', (err) => {
    console.error('\n==================================================');
    console.error('CRITICAL WARNING: Uncaught Exception Detected!');
    console.error('Error Details:', err);
    console.error('==================================================\n');
});

// Catch Unhandled Promise Rejections globally
// Prevents unhandled async/await database rejections from terminating the process
process.on('unhandledRejection', (reason, promise) => {
    console.error('\n==================================================');
    console.error('CRITICAL WARNING: Unhandled Promise Rejection!');
    console.error('At Promise:', promise);
    console.error('Reason:', reason);
    console.error('==================================================\n');
});

// Start the Express server
app.listen(PORT, () => {
    console.log('\n==================================================');
    console.log('   EMITRA SATHI - EXPRESS WEB SERVER STARTED     ');
    console.log('==================================================');
    console.log(`\nFrontend Operator Dashboard:\n--> http://localhost:${PORT}/index.html`);
    console.log(`\nMaster Admin Backend Dashboard:\n--> http://localhost:${PORT}/cyber_cafe_backend.html`);
    console.log(`\nLogin Page directly:\n--> http://localhost:${PORT}/login.html`);
    console.log('\nPress Ctrl+C to stop the server.\n');
});
