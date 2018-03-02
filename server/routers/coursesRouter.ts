import { Router } from 'express';
import { CoursesController } from '../controllers/coursesController';

const router = Router();

router.get('/', CoursesController.findAllCourses);

export const coursesRouter = router;