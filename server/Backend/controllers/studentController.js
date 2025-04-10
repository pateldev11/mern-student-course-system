import bcrypt from 'bcryptjs';
import Student from '../models/studentModel.js';
import generateToken from "../middleware/generateToken.js";

class StudentController {
    async addStudent(req, res) {
        try {
            const { studentNumber, password, firstName, lastName, email, phoneNumber, address, city, program, favouriteCourse, hobby } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);

            const student = new Student({
                studentNumber,
                password: hashedPassword,
                firstName,
                lastName,
                email,
                phoneNumber,
                address,
                city,
                program,
                favouriteCourse,
                hobby
            });
            await student.save();
            res.status(201).json(student);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async loginStudent(req, res) {
        const { studentNumber, password } = req.body;
        try {
            const student = await Student.findOne({ studentNumber });

            if (student && (await bcrypt.compare(password, student.password))) {
                res.cookie('token', generateToken(student._id), { httpOnly: true });
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(400).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async logoutStudent(req, res) {
        res.clearCookie('token');
        res.status(200).json({ message: 'Logout successful' });
    }

    async listOfStudents(req, res) {
        try {
            const students = await Student.find();
            res.status(200).json(students);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async courseListsForStudent(req, res) {
        try {
            const student = await Student.findById(req.params.id).populate('courses');
            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }
            res.status(200).json(student.courses);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

export default new StudentController();