import { useState } from 'react';
import axios from 'axios';
// import Survey from './Survey';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('/register', {
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            });

            if (response.status === 201) {
                setMessage(response.data.message);
                navigate('/');
                
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage(error.response.data.error); // Set error message
            } else {
                setMessage('An error occurred. Please try again later.');
                console.error('Registration error:', error);
            }
        }
    };

    return (
        <div>
            <h1>Register</h1>
            {message && <p>{message}</p>}
            <form className="login register" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit" className="register-btn">Register</button>
            </form>
        </div>
    );
};

export default Register;