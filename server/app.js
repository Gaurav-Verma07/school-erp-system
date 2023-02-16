const express = require('express');
const app = express();
const cors = require("cors");
require('./config/dbConfig')

// Import Router
const studentRouter = require("./routes/studentRoutes");
const sampleRouter = require('./routes/sampleRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/v1/student", studentRouter);
app.use('/v1', sampleRouter);

module.exports = app;
