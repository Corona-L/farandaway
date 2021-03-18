'use-strict';
import {Request, Response} from 'express';
const { models } = require('../models');
const { invitee, trip, option } = models;

exports.addInvitee = async (req: Request, res: Response): Promise<void> => {
  const { emailAddress, userId } = req.body;
  const { tripId } = req.params;
  try {
    const newInvitee = await invitee.create({
      emailAddress,
      userId,
      tripId,
    });
    res.send(newInvitee);
    res.status(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getInviteeTrips = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  const userTrips: any[] = [];
  try {
    const inviteeTrips = await trip.findAll({
      include: [
        {
          model: invitee,
          where: {
            userId: userId,
          },
        },
        { model: option },
      ],
    });
    inviteeTrips.map((trip: any[]) => {
      // const tripId = trip.id;
      // value is never read
      // const selectedTrip = () => {
      //   trip.findAll({
      //     where: {
      //       id: tripId,
      //     },
      //     include: [{ model: option }],
      //   });
      // };
      userTrips.push(trip);
    });
    res.status(200);
    res.send(userTrips);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
