require('dotenv').config();
const PORT = process.env.PORT || 3333;
const app = require('./app');
// const https = require('https');
// const fs = require('fs');

// const privateKey = fs.readFileSync('./sslcert/server.key', 'utf8');
// const certificate = fs.readFileSync('./sslcert/server.cert', 'utf8');
// const credentials = { key: privateKey, cert: certificate };
// const httpsServer = https.createServer(credentials, app);

app.listen(PORT, () => console.log('running on HTTPS Port', PORT));
// httpsServer.listen(PORT, () => console.log('running on HTTPS Port', PORT));
