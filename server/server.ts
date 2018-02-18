const ORM = require('sequelize');
import { Sequelize } from 'Sequelize';

const dbURL = 'postgres://localhost:5432/complete-typescript-course';

const sequelize: Sequelize  = new ORM(dbURL);

const CourseModel = sequelize.define('Course', {
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

CourseModel.findAll();

console.log(CourseModel.findAll());