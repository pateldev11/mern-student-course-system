import React, { useState, useEffect } from 'react'; // Import useState, useEffect
import api from '../../services/api';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ListCourse = () => {
  const [courses, setCourses] = useState([]);

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
      <h2>List of Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <div className="course-details">
              <div className="course-code"><b>Course Code</b> - {course.courseCode}</div>
              <div className="course-name"><b>Course Name</b> - {course.courseName}</div>
              <div className="course-section"><b>Section</b> - {course.section}</div>
              <div className="course-section"><b>Semester</b> - {course.semester}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ListCourse;
