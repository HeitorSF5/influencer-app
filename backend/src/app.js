const express = require('express');
const loginRouter = require('./routes/loginRouter');
const influRouter = require('./routes/influRouter');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(loginRouter);
app.use(influRouter);

module.exports = app;
