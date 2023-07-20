const md5 = require('md5');
const connection = require('./connection');

const loginModel = async (user) => {
  const { username, password } = user;
  const hashedPassword = md5(password);
  console.log('In model! Making connection to MySQL now.')

  try {
    const query = await connection.execute( // CHANGE IT BACK TO [query]
      'SELECT username FROM Users WHERE username=? AND password=?',
      [username, hashedPassword],
    );
    console.log('RESULT OF THE QUERY: ', query)
    if(query.length > 0) return true;
    // else return false;
    return false;
  } catch(err) {
    console.log('--- ERROR! ---', err)
  }
}

// to do: Remodel DB users table to have "priviliges" column (user / admin / mod / etc)
// to do: Give binah admin priviliges

module.exports = loginModel;