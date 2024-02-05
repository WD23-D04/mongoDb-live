import { faker } from '@faker-js/faker';
import { Types } from 'mongoose';
import { Request, Response } from 'express';
import { Author } from '../schemas/authorSchema';
import { Book } from '../schemas/bookSchema';
import { Employee } from '../schemas/employeeSchema';
import { User } from '../schemas/userSchema';

import { IAuthor, IBook, IEmployee, IUser } from '../utils/types';

export const insertFakeData = async (req: Request, res: Response) => {
  try {
    const fakeAuthorsData: IAuthor[] = Array.from({ length: 50 }, () => ({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      books: [
        Types.ObjectId.createFromHexString(faker.database.mongodbObjectId()),
      ],
      description: faker.commerce.productDescription(),
    }));

    const fakeBooksData: IBook[] = Array.from({ length: 200 }, () => ({
      title: faker.commerce.product(),
      authors: [
        Types.ObjectId.createFromHexString(faker.database.mongodbObjectId()),
      ],
      pages: faker.number.int({ min: 20, max: 1000 }),
      available: faker.datatype.boolean(),
      publishedDate: faker.date.past(),
      publisher: faker.company.name(),
      contributors: [
        Types.ObjectId.createFromHexString(faker.database.mongodbObjectId()),
      ],
    }));

    const fakeUsersData: IUser[] = Array.from({ length: 500 }, () => ({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: [faker.phone.number()],
      address: {
        street: faker.location.street(),
        number: faker.location.buildingNumber(),
        zipCode: faker.location.zipCode(),
        city: faker.location.city(),
      },
      subscribedFrom: faker.date.anytime(),
      books: [faker.music.songName()],
      borrowedDate: faker.date.anytime(),
    }));

    const fakeEmployeesData: IEmployee[] = Array.from({ length: 10 }, () => ({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: [Number(faker.phone.number())],
      address: {
        street: faker.location.street(),
        number: faker.location.buildingNumber(),
        zipCode: faker.location.zipCode(),
        city: faker.location.city(),
      },
      books: [Types.ObjectId.createFromHexString(faker.music.songName())],
      borrowedDate: faker.date.anytime(),
      vacationDays: faker.helpers.rangeToNumber(30),
      vacationTaken: [{ from: faker.date.past(), to: faker.date.anytime() }],
      leaveDays: [{ from: faker.date.anytime(), to: faker.date.anytime() }],
      workHours: faker.helpers.rangeToNumber({ min: 20, max: 40 }),
    }));

    const authors = await Author.insertMany(fakeAuthorsData);
    const books = await Book.insertMany(fakeBooksData);
    const users = await User.insertMany(fakeUsersData);
    const employees = await Employee.insertMany(fakeEmployeesData);

    res.status(201).json({ authors, books, users, employees });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
