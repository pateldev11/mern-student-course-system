import React, { useState } from 'react';
import api from '../../services/api';

const AddStudent = () => {
  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [program, setProgram] = useState('');
  const [favouriteCourse, setFavouriteCourse] = useState('');
  const [hobby, setHobby] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/students/addStudent', {
        studentNumber,
        password,
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        city,
        program,
        favouriteCourse,
        hobby,
      });
      console.log('Student added:', response.data);
    } catch (error) {
      console.error('Failed to add student:', error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student Number:</label>
        <input type="text" value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
      </div>
      <div>
        <label>Program:</label>
        <input type="text" value={program} onChange={(e) => setProgram(e.target.value)} required />
      </div>
      <div>
        <label>Favourite Course:</label>
        <input type="text" value={favouriteCourse} onChange={(e) => setFavouriteCourse(e.target.value)} required />
      </div>
      <div>
        <label>Hobby:</label>
        <input type="text" value={hobby} onChange={(e) => setHobby(e.target.value)} required />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;