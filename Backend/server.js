require('dotenv').config();
const express = require('express');          // Add express here
const cookieParser = require('cookie-parser'); // Add cookie-parser
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

// Use middlewares
app.use(express.json());        // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // parse urlencoded bodies
app.use(cookieParser());        // parse cookies

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
