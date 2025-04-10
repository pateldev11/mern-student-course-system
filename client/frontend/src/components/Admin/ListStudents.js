import React, { useState, useEffect } from 'react';
import api from '../../services/api';

const ListStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await api.get('/students/listOfStudents');
        setStudents(response.data);
      } catch (error) {
        console.error('Failed to fetch students:', error.response.data.message);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.firstName} {student.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListStudents;