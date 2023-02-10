const express = require('express');
const app = express();

app.use(express.json());

const sampleRouter = require('./routes/sampleRoutes');
app.use('/v1', sampleRouter);

module.exports = app;
