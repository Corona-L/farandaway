import { Model, Optional } from 'sequelize';

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