import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import '../Styles/LogIn.css'; // Import CSS

const Login = ({ setAuth }) => {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/students/login", {
        studentNumber,
        password,
      });
      setAuth(true);
      console.log(response.data.message);
      navigate("/"); // Redirect to a protected route after login
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data.message : error.message
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Log In</h1>
        <h5>*(Just to check the login funtionality e.g. username: S333 Password: S333)</h5>
        <label>Student Number:</label>
        <input
          type="text"
          value={studentNumber}
          onChange={(e) => setStudentNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
