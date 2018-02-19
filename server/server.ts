import * as express from 'express';

import { CourseModel } from './model/model';
import { findAllCoursesController } from './queries/findAllCourses';

const app = express();

async function findAllCourses (req: any, res: any) {
  try {
    let allCourses = await findAllCoursesController();
    res.status(200).json({'courses': allCourses});
  } catch (err) {
    res.status(500).json({'error': err});
  }
}

app.route('/api/courses').get(findAllCourses);

app.listen(8090, () => {
  console.log('Server is running ...');
});