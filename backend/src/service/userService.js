const md5 = require("md5");
const token = require('../schema/token')
const loginModel = require('../models/userModel')

const loginService = async (user) => {
  console.log('inside Service for Login! Here are the creds:', user)
  const { username, password } = user;  
  const hashPassword = md5(password)  
  const userLogged = await loginModel({username, password: hashPassword});
  const admin = username==="binah"

  if (!userLogged) { 
    console.log('Couldnt find user in the DB!')
    return { code: 404, error: 'Invalid credentials' }
  }
  console.log('User was found in the Database!')
  const accessToken = token({ username, password });
  return { accessToken, admin };
}; // to do: proper admin credential check

module.exports = loginService;