import express from 'express';
import courseController from '../controllers/courseController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/addCourse', protect, courseController.addCourse);
router.get('/listOfCourses', protect, courseController.listOfCourses);
router.get('/studentListsForCourse/:id', protect, courseController.listOfStudentsForCourse);
router.put('/updateCourse/:id', protect, courseController.updateCourse);
router.delete('/deleteCourse/:id', protect, courseController.deleteCourse);

export default router;