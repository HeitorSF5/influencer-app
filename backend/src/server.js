const app = require('./app')

require('dotenv').config();

const PORT = process.env.DB_PORT || 3334

app.listen(PORT, () => console.log('running on Port', PORT));