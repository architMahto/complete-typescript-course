import { CourseModel } from './../model/model';
const bluebird = require('bluebird');

export async function findAllCourses() {
  return bluebird.promisifyAll(CourseModel.findAll({
    order: ['seqNo']
  }));
}