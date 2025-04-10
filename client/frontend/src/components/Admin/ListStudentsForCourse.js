import React, { useState } from 'react';
import api from '../../services/api';

const ListStudentsForCourse = () => {
  const [courseId, setCourseId] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/courses/studentListsForCourse/${courseId}`);
      setStudents(response.data);
    } catch (error) {
      console.error('Failed to fetch students:', error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course ID:</label>
          <input type="text" value={courseId} onChange={(e) => setCourseId(e.target.value)} required />
        </div>
        <button type="submit">List Students</button>
      </form>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.firstName} {student.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListStudentsForCourse;