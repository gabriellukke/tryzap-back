const router = require('express').Router();

// Users
router.get('/user', (req, res) => {
  res.status(200).send('hello!')
});

module.exports = router;
