import { Types, Schema } from 'mongoose';

export interface IAddress {
  street: string;
  number: string;
  zipCode: string;
  city: string;
}

export interface IAuthor extends IPerson {
  books: Types.ObjectId[];
  description: string;
}

export interface IContactInformation {
  phone: number[];
  email: string;
}

export interface IBook {
  title: string;
  authors: Types.ObjectId[];
  pages: number;
  available: boolean;
  publishedDate: Date;
  publisher: string;
  contributors: Types.ObjectId[];
}

export interface IEmployee extends IPerson {
  /* ...contactInformationSchema as IInformation, */
  phone: number[];
  email: string;
  address: IAddress;
  vacationDays: number;
  vacationTaken: [{ from: Date; to: Date }];
  leaveDays: [{ from: Date; to: Date }];
  workHours: number;
  books: [Types.ObjectId];
}

export interface IPerson {
  firstName: string;
  lastName: string;
}

export interface IUser extends IPerson {}
