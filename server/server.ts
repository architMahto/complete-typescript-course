import * as express from 'express';
import {Request, Response} from 'express';

import CoursesController from './controllers/coursesController';

const app = express();

// Initialize controllers
const coursesController = new CoursesController();

// Create API routes
app.route('/api/courses').get(coursesController.findAllCourses);

app.listen(8090, () => {
  console.log('Server is running ...');
});