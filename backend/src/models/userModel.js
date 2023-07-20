const md5 = require('md5');
const connection = require('./connection');

const loginModel = async (user) => {
  const { username, password } = user;
  const hashedPassword = md5(password);
  console.log('In model! Making connection to MySQL now.')
  const [query] = await connection.execute(
    'SELECT username FROM Users WHERE username=? AND password=?',
    [username, hashedPassword],
  );
  if(query.length > 0) return true;
  else return false;
}

// to do: Remodel DB users table to have "priviliges" column (user / admin / mod / etc)
// to do: Give binah admin priviliges

module.exports = loginModel;