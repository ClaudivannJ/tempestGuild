const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true }, // Alterado para String
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  numberPhone: { type: String, required: true, unique: true }, // Alterado para String
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true });

const User = mongoose.model('Users', userSchema);

module.exports = User;
