const express = require('express');
const config = require('config');
const connectDB = require('./backend/dataBase/connectDB');

const app = express();
const PORT = config.get('serverPort');

connectDB();

app.use(express.json());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'x-auth-token', 'Cookie', 'Set-Cookie']);
  next();
});

app.use('/', require('./backend/routes/reg'));
app.use('/auth', require('./backend/routes/auth'));
app.use('/validation', require('./backend/routes/validation'));

app.listen(PORT, () => {
  console.log('Server started on port 5000');
});
