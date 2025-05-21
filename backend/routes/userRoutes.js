const express = require('express');
const router = express.Router();
const { registerUser,loginUser } = require('../controllers/userController');

// Register User
router.post('/signup', registerUser);  // Ensure this matches the route you're calling from frontend

router.post("/login", loginUser);

module.exports = router;
