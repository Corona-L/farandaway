import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

// Destination interfaces
interface DestinationAttributes {
  id?: number;
  name: string;
  country: string;
  emoji: string;
  timezone: string;
  climate: object[]; // need to define interface for climate json
}

interface DestinationCreationAttributes
  extends Optional<DestinationAttributes, 'id'> {}

export interface DestinationInstance 
  extends Model<DestinationAttributes, DestinationCreationAttributes>,
    DestinationAttributes {}

// Flight interfaces
interface FlightAttributes {
  id?: number;
  origin: string;
  destination: string;
  outbound: Date;
  inbound: Date;
  minPrice: number;
  carrier: string;
  currency: string;
}

interface FlightCreationAttributes 
  extends Optional<FlightAttributes, 'id'> {}

export interface FlightInstance 
  extends Model<FlightAttributes, FlightCreationAttributes>,
    FlightAttributes {}

// Invitee
interface InviteeAttributes {
  id?: number;
  emailAddress: string;
  userId: number;
}

interface IniviteeCreationAttributes
  extends Optional<InviteeAttributes, 'id'> {}

export interface InviteeInstance
  extends Model<InviteeAttributes, IniviteeCreationAttributes>,
    InviteeAttributes {}
