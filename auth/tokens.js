const { sign } = require('jsonwebtoken');

// Create tokens
// ----------------------------------
const createAccessToken = userId => {
  return sign({ userId }, process.env.ACCESS_TOKEN, {
    expiresIn: '7d',
  });
};

// Send token
// ----------------------------------
const sendAccessToken = (res, req, userData) => {
  res.status(200).send(userData);
};

module.exports = {
  createAccessToken,
  sendAccessToken
};

