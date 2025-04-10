import Course from '../models/courseModel.js';

class CourseController {
    async addCourse(req, res) {
        try {
            const course = new Course(req.body);
            await course.save();
            res.status(201).json(course);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateCourse(req, res) {
        try {
            const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json(course);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async deleteCourse(req, res) {
        try {
            const course = await Course.findByIdAndDelete(req.params.id);
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json({ message: 'Course deleted successfully' });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async listOfCourses(req, res) {
        try {
            const courses = await Course.find();
            res.status(200).json(courses);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async listOfStudentsForCourse(req, res) {
        try {
            const course = await Course.findById(req.params.id).populate('students');
            if (!course) {
                return res.status(404).json({ message: 'Course not found' });
            }
            res.status(200).json(course.students);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

export default new CourseController();