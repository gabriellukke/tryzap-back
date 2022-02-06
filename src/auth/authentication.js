const { User } = require('../models');
const Token = require('./token');

const authToken = async (userEmail, userPassword) => {
  const user = await User.findOne({ email: userEmail }).exec();

  console.log(user)

  if (!user) {
    throw new Error('ERR_EMAIL_NOT_FOUND');
  }

  if (userPassword !== user.password) {
    throw new Error('ERR_INVALID_PASSWORD');
  }

  const token = await Token.generate({
    userId: user.id,
    userName: user.name,
    userEmail: user.email,
  });

  const { password, ...userInfo } = user.dataValues;

  return { ...userInfo, token };
};

module.exports = {
  authToken,
};
