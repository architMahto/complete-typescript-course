import { CourseModel } from './model/model';

const bluebird = require('bluebird');

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