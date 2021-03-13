import { Model, Optional } from 'sequelize';

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

interface UserAttributes {
  id?: number;
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>,
UserAttributes {}


interface TripAttributes {
  id?: number;
  title: string;
}

interface TripCreationAttributes extends Optional<TripAttributes, 'id'> {}

export interface TripInstance extends Model<TripAttributes, TripCreationAttributes>,
TripAttributes {}


interface OptionAttributes {
  id?: number;
  title: string;
  destination: string;
  budgetRangeMin: string;
  budgetRangeMax: string;
  startDate: Date;
  nights: number;
  votes: number;
  isChosen: boolean;
}

interface OptionCreationAttributes extends Optional<OptionAttributes, 'id'> {}

export interface OptionInstance extends Model<OptionAttributes, OptionCreationAttributes>,
OptionAttributes {}
