'use-strict';
import {Request, Response} from 'express';
const { models } = require('../models');
const { flight } = models;


exports.createFlight = async (req: Request, res: Response) => {
  const {
    origin,
    destination,
    outbound,
    inbound,
    minPrice,
    carrier,
    currency,
  } = req.body;

  try {
    const newFlight = await flight.create({
      origin,
      destination,
      outbound,
      inbound,
      minPrice,
      carrier,
      currency,
    });
    res.status(201);
    res.send(newFlight);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

exports.getFlights = async (req: Request, res: Response) => {
  try {
    const flights = await flight.findAll();
    res.status(200);
    res.send(flights);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
