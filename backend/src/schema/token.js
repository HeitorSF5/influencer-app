const { sign } = require('jsonwebtoken');

const SECRET = 'secretword'
// mocking the .env for consistency

module.exports = (payload) => {
  const token = sign(payload, SECRET, {
    algorithm: 'HS256',
    expiresIn: '10d',
  });

  return token;
};