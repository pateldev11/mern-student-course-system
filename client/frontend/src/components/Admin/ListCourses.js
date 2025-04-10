import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const ListCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get('/courses/listOfCourses');
        setCourses(response.data);
      } catch (error) {
        console.error('Failed to fetch courses:', error.response.data.message);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>{course.courseName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListCourses;