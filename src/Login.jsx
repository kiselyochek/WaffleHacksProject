import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await axios.post('/', {
              username: username,
              password: password
          });

          if (response.status === 200) {
              setMessage(response.data.message);
                
          }
      } catch (error) {
          if (error.response && error.response.status === 401) {
              setMessage(error.response.data.error); 
          } else {
              setMessage('An error occurred. Please try again later.');
              console.error('Login error:', error);
          }
      }
    
    }

    return (
        <div>
        <h1>Name</h1>
        {message && <p>{message}</p>}
        <form className="login" onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <Link className="playbtn" to="/dashboard">Play</Link>
          <p>Do not have an account? <Link to="/register" className="register-btn">Register</Link></p>
        </form>
        </div>
    );
  };


export default Login;