import * as ORM from 'Sequelize';
import { Sequelize } from 'Sequelize';
import { CourseModel } from './../model/course';

const bluebird = require('bluebird');

class CoursesService {
  async findAllCourses(): Promise<any> {
    return bluebird.promisifyAll(CourseModel.findAll({
      order: ['seqNo']
    }));
  }
}

export default CoursesService;
