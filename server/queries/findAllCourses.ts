import { CourseModel } from './../model/model';
const bluebird = require('bluebird');

export async function findAllCoursesController() {
  return bluebird.promisifyAll(CourseModel.findAll({
    order: ['seqNo']
  }));
}