const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
  const { userId, username, password, numberPhone } = req.body;

  console.log('Received login request:', { userId,username, password, numberPhone });
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ userId, username, password: hashedPassword, numberPhone });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { userId, password } = req.body;
  console.log('Received login request:', { userId, password });

  try {
    const user = await User.findOne({ userId });
    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch');
      console.log(password, user.password)
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
    console.log('Login successful:', { token, username: user.username });

    res.json({ token, username: user.username });
  } catch (error) {
    console.log('Server error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};