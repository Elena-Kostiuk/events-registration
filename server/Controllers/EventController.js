const { Event } = require('../models');

module.exports.getAllEvents = async (req, res, next) => {
  try {
    const events = await Event.findAll();
    res.status(200).send({ data: events });
  } catch (error) {}
};
