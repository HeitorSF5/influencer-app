require('dotenv').config();
const PORT = process.env.PORT || 3333;
const app = require('./app');

app.listen(PORT, () => console.log('running on Port', PORT));
