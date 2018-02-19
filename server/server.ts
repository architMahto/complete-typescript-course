import { CourseModel } from './model/model';
import { findAllCourses } from './queries/findAllCourses';

const main = async () => {
  try {
    let allCourses = await findAllCourses();
    console.log(allCourses);
  } catch(err) {
    console.log(err);
  }
}

main();