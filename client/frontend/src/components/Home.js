import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link
import './Styles/HomePage.css'; // Import CSS

const HomePage = () => {  // Receive user and onLogout as props
    return (
        <div className="home-page-container">
            <nav className="navbar">
                <div className="navbar-brand">My App</div> {/* Your app name/logo */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link> {/* Link to Home */}
                    </li>

                    <li className="nav-item">
                        <Link to="/student/addCourse" className="nav-link">Add Course</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/student/updateCourse" className="nav-link">Update Course</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/student/deleteCourse" className="nav-link">Drop Course</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/student/listStudentCourses" className="nav-link">My Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link> {/* Login Link */}
                    </li>                    
                </ul>
            </nav>

            <div className="content">
                {/* Your homepage content goes here */}
                <h1>Welcome to My App</h1>
                <p>This is the home page.</p>

                {/* Example Services Section */}
                <section className="services">
                    <h2>Our Services</h2>
                    <div className="service-grid">
                        <div className="service">
                            <h3>Course Management</h3>
                            <p>Add, update, and manage your courses.</p>
                        </div>
                        <div className="service">
                            <h3>Student Management</h3>
                            <p>Manage student information and enrollment.</p>
                        </div>
                        <div className="service">
                            <h3>Enrollment Tracking</h3>
                            <p>Track student enrollment in courses.</p>
                        </div>
                        {/* Add more service boxes as needed */}
                    </div>
                </section>
            </div>
        </div>
    );
};

HomePage.propTypes = {
    user: PropTypes.shape({
        role: PropTypes.string // Define the user's role if needed
    }),
    onLogout: PropTypes.func.isRequired // Logout function prop validation
};

export default HomePage;
