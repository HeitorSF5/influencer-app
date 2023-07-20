const express = require('express');
const loginRouter = require('./routes/loginRouter');
const influRouter = require('./routes/influRouter');
const cors = require('cors');
const path = require('path');

const app = express();
const frontEndBuildPath = path.join(__dirname, '../frontend-build');

app.use(cors());
app.use(express.json());
app.use(express.static(frontEndBuildPath));
app.use(loginRouter);
app.use(influRouter);

module.exports = app;
