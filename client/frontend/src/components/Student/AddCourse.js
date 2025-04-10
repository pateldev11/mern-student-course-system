import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import '../Styles/AddCourse.css'; // Import the CSS file
import '../Styles/HomePage.css'; // Import the CSS file

const AddCourse = () => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [section, setSection] = useState('');
  const [semester, setSemester] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/courses/addCourse', { courseCode, courseName, section, semester });
      console.log('Course added:', response.data);
      navigator('/student/addCourse');
    } catch (error) {
      console.error('Failed to add course:', error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">My App</div>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/student/addCourse" className="nav-link">Add Course</Link></li>
          <li className="nav-item"><Link to="/student/updateCourse" className="nav-link">Update Course</Link></li>
          <li className="nav-item"><Link to="/student/deleteCourse" className="nav-link">Drop Course</Link></li>
          <li className="nav-item"><Link to="/student/listStudentCourses" className="nav-link">My Courses</Link></li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add Course</h1>
          <label>Course Code:</label>
          <input type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} required />
        </div>
        <div>
          <label>Course Name:</label>
          <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
        </div>
        <div>
          <label>Section:</label>
          <input type="text" value={section} onChange={(e) => setSection(e.target.value)} required />
        </div>
        <div>
          <label>Semester:</label>
          <input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} required />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;
