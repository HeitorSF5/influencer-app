const md5 = require("md5");
const token = require('../schema/token')
const loginModel = require('../models/userModel')

const loginService = async (user) => {
  const { username, password } = user;  
  const hashPassword = md5(password)  
  const userLogged = await loginModel({username, password: hashPassword});
  const admin = username==="binah"

  if (!userLogged) return { code: 404, error: 'Invalid credentials' }
  const accessToken = token({ username, password });
  return { accessToken, admin };
}; // to do: proper admin credential check

module.exports = loginService;