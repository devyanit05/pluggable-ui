import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/authActions';
import { validateEmail, validatePassword } from '../auth/userValidation';
import '../styles/login.css';
import logo from '../utils/logo.png';
import { Navigate } from 'react-router-dom';




const LoginUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);
  
    const handleSubmit = (e) => {
      e.preventDefault();

        // Validate email and password
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        if (emailError || passwordError) {
        setErrors({ email: emailError, password: passwordError });
        return;
        }

        dispatch(loginUser(email, password));
    };

  return (
    <div className="login-container">
        <div className="login-box">
            <div className="login-header">
                <img src={logo} alt="Wolters Kluwer" />
                <h2>Sign in</h2>
            </div>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="login-field">
                    <label htmlFor="email">WK Enterprise ID</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                <div className="login-field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {errors.password && <div className="error-message">{errors.password}</div>}
                </div>
                <div className="login-links">
                    <a href="/forgot-password">Can’t access your account?</a>
                </div>
                <div className="login-buttons">
                    <button type="submit" className="next-button">Sign In</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginUser;
