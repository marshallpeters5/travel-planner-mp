const express = require('express');
const router = express.Router();
const User = require('../models/Traveller');

router.get('/', async (req, res) => {
  try {
    const travellers = await User.findAll({
      include: [],
    });

    res.json(travellers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;