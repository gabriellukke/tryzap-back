const router = require('express').Router();

const authentication = require('./auth/authentication');

// Users
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInfo = await authentication.authToken(email, password);
    return res.status(200).json(userInfo);
  } catch (err) {
    console.log(err);
    if (err.message === 'ERR_EMAIL_NOT_FOUND' || err.message === 'ERR_INVALID_PASSWORD') {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
  };
});

module.exports = router;
