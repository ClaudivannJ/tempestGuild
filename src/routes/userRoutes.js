const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/api/register', userController.registerUser);
router.post('/api/login', userController.loginUser);
router.get('/api/login', (req, res) => {
    console.log("teste")
    res.send('<h1>ola</h1>')
  })
module.exports = router;
