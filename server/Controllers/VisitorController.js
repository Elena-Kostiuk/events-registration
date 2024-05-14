const { Event, Visitor } = require('../models');

module.exports.getVisitors = async (req, res, next) => {
  try {
    const {
      params: { eventId },
    } = req;
    const visitors = await Event.findAll({
      where: {
        id: Number(eventId),
      },
      include: [
        {
          model: Visitor,
        },
      ],
    });
    res.status(200).send({ data: eventWhithMembers });
  } catch (error) {}
};

module.exports.createVisitor = async (req, res, next) => {
  try {
    const {
      body,
      params: { eventId },
    } = req;
    const visitorInstanse = await Visitor.create(body);
    const eventInstanse = await Event.findByPk(eventId);
    await eventInstanse.addVisitor(visitorInstanse);
    res.status(200).send({ meta: { eventAdded: eventId } });
  } catch (error) {}
};
