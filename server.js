// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const formRoutes = require('./routes/formRoutes');
// require('dotenv').config();
// const db = require('./config/db');
// const mysql = require('mysql')

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // API Routes
// app.use('/api', formRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//     res.status(500).json({ message: 'Server Error', error: err.message });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');
require('dotenv').config();  // Make sure .env file exists with proper credentials
const db = require('./config/db'); // Ensures database is connected properly
const mysql = require('mysql2');   // Ensure you're using the correct package

const app = express();
const PORT = process.env.PORT || 3306;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use('/api', formRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Server Error', error: err.message });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

