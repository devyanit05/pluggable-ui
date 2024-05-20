// app.js
const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// ... rest of your express app setup ...

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
