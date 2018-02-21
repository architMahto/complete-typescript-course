import { Request, Response } from 'express';
import CoursesService from '../services/coursesServices';

const coursesService: CoursesService = new CoursesService();

class CoursesController {
  async findAllCourses(req: Request, res: Response) {
    try {
      let courses = await coursesService.findAllCourses();
      res.status(200).json({ courses });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}

export default CoursesController;