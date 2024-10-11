const { Event, Visitor } = require("../models");
const { checkout } = require("../router");

module.exports.getVisitors = async (req, res, next) => {
  try {
    const {
      params: { eventId },
    } = req;
    const eventWithVisitors = await Event.findOne({
      where: {
        id: Number(eventId),
      },
      include: [
        {
          model: Visitor,
          through: { attributes: [] },
        },
      ],
    });
    res.status(200).send({ eventWithVisitors });
  } catch (error) {}
};

module.exports.addVisitorToEvent = async (req, res, next) => {
  try {
    const {
      body,
      params: { eventId },
    } = req;

    if (!body.birthday) {
      delete body.birthday;
    }

    const [visitorInst, created] = await Visitor.findOrCreate({
      where: {
        email: body.email,
      },
      defaults: body,
    });

    const eventInst = await Event.findByPk(Number(eventId));
    const check = await eventInst.hasVisitor(visitorInst);
    if (check) {
      res
        .status(200)
        .send({ message: "It looks like you have already registered before" });
    } else {
      await eventInst.addVisitor(visitorInst);
      res
        .status(200)
        .send({ message: "You are successfully registered for the event" });
    }
  } catch (error) {}
};
