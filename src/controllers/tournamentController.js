const Tournament = require('../models/tournament');

const createTournament = async (req, res) => {
  const { name, description, date } = req.body;
  try {
    const newTournament = new Tournament({ name, description, date });
    await newTournament.save();
    res.status(201).json(newTournament);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find().populate('participants');
    res.status(200).json(tournaments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createTournament, getTournaments };
