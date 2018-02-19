import * as ORM from 'Sequelize';
import { Sequelize, LoggingOptions } from 'Sequelize';
import { initCourseModel } from './initCourseModel';

const dbURL = 'postgres://localhost:5432/complete-typescript-course';
const options: LoggingOptions = {
  benchmark: true,
  logging: console.log
}

const sequelize: Sequelize = new ORM(dbURL, options);

export const CourseModel = initCourseModel(sequelize);