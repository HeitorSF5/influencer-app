const express = require('express');
const loginRouter = require('./routes/loginRouter');
const influRouter = require('./routes/influRouter');
const cors = require('cors');
const path = require('path');

const app = express();
const frontEndBuildPath = path.join(__dirname, '../frontend-build');

const corsOptions = { 
  origin: 'http://localhost:4200'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(frontEndBuildPath));
app.use(loginRouter);
app.use(influRouter);
console.log('App file setup')

module.exports = app;
