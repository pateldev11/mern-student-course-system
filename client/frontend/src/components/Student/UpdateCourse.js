import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import '../Styles/UpdateCourse.css' // Import the CSS file
import '../Styles/HomePage.css'; // Import the CSS file

const UpdateCourse = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newSection, setNewSection] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses/listOfCourses');
        setCourses(response.data);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleUpdate = async (courseId) => {
    try {
      await api.put(`/courses/updateCourse/${courseId}`, { section: newSection });
      alert('Course section updated successfully!');
      setCourses(courses.map(course => course._id === courseId ? { ...course, section: newSection } : course));
      setSelectedCourse(null);
      setNewSection('');
    } catch (error) {
      console.error('Failed to update course:', error);
    }
  };

  return (
    <div className="container">
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
      <h2>Update Course Section</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <div className="course-details">
              <div className="course-code"><b>Course Code</b> - {course.courseCode}</div>
              <div className="course-name"><b>Course Name</b> - {course.courseName}</div>
              <div className="course-section"><b>Section</b> - {course.section}</div>
              <div className="course-section"><b>Semester</b> - {course.semester}</div>
            </div>
            <button className="update-button" onClick={() => setSelectedCourse(course)}>Update</button>
          </li>
        ))}
      </ul>
      {selectedCourse && (
        <div>
          <h3>Updating {selectedCourse.courseName}</h3>
          <label>New Section:</label>
          <input
            type="text"
            value={newSection}
            onChange={(e) => setNewSection(e.target.value)}
            required
          />
          <button onClick={() => handleUpdate(selectedCourse._id)}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default UpdateCourse;
