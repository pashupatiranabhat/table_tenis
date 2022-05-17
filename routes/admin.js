const express = require('express');
const router = express.Router();
const Auth = require('../controllers/register/auth');
const {Authenticate} = require('../middleware/verify-token');
router.post('/login',Auth.Login);



module.exports = router;