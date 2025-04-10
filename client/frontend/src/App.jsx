import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import AddStudent from './components/Admin/AddStudent';
import AddCourse from './components/Student/AddCourse';
import ListCourses from './components/Admin/ListCourses';
import ListStudents from './components/Admin/ListStudents';
import ListStudentsForCourse from './components/Admin/ListStudentsForCourse';
import DropCourse from './components/Student/DropCourse';
import UpdateCourse from './components/Student/UpdateCourse';
import ListStudentCourses from './components/Student/ListCourses';
import Index from './components/Home';

const App = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(null); // to track user login status

  
  const handleLogout = () => {
    setUser(null); // Clear user data on logout
    localStorage.removeItem("token"); // Optionally remove token from localStorage
    localStorage.removeItem("user");
  };
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Index user={user} onLogout={handleLogout} />} />

        <Route path="/login" element={<Login setAuth={setAuth} />} />
        
        {/* Protected Routes */}
        <Route 
          path="/student/addCourse" 
          element={auth ? <AddCourse /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/student/deleteCourse" 
          element={auth ? <DropCourse /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/student/updateCourse" 
          element={auth ? <UpdateCourse /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/student/listStudentCourses" 
          element={auth ? <ListStudentCourses /> : <Navigate to="/login" />} 
        />
        
        {/* Admin Routes */}
        <Route 
          path="/admin/add-student" 
          element={auth ? <AddStudent /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/admin/list-courses" 
          element={auth ? <ListCourses /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/admin/list-students" 
          element={auth ? <ListStudents /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/admin/list-students-for-course" 
          element={auth ? <ListStudentsForCourse /> : <Navigate to="/login" />} 
        />

        {/* Default Redirect */}

      </Routes>
    </Router>
  );
};

export default App;
