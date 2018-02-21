import * as ORM from 'Sequelize';
import { Sequelize, LoggingOptions } from 'Sequelize';

const dbURL = 'postgres://localhost:5432/complete-typescript-course';
const options: LoggingOptions = {
  benchmark: true,
  logging: console.log
}

const sequelize: Sequelize = new ORM(dbURL, options);

export const CourseModel = sequelize.define('Course', {
  description: ORM.STRING,
  url: ORM.STRING,
  longDescription: ORM.TEXT,
  iconUrl: ORM.STRING,
  courseListIcon: ORM.STRING,
  seqNo: ORM.INTEGER,
  comingSoon: ORM.BOOLEAN,
  isNew: ORM.BOOLEAN,
  isOngoing: ORM.BOOLEAN
});