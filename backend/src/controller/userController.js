const loginService = require('../service/userService');

const loginControl = async (req, res) => {
  const userInfo = req.body;
  const userLogged = await loginService(userInfo);
  if ('error' in userLogged) {
    return res.status(userLogged.code).json({ message: userLogged.error });
  }
  res.status(200).json(userLogged);
};

module.exports = loginControl;