const ORM = require('sequelize');
const bluebird = require('bluebird');

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

async function findAllCourses(): Promise<any> {
  return bluebird.promisifyAll(CourseModel.findAll());
}

const main = async () => {
  try {
    let allCourses = await findAllCourses();
    console.log(allCourses);
  } catch(err) {
    console.log(err);
  }
}

main();