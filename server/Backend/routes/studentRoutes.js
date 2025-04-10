import express from 'express';
import studentController from '../controllers/studentController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/addStudent', studentController.addStudent);
router.get('/listOfStudents', protect, studentController.listOfStudents);
router.get('/courseListsForStudent/:id', protect, studentController.courseListsForStudent);
router.post('/login', studentController.loginStudent);
router.post('/logout', protect, studentController.logoutStudent);

export default router;
