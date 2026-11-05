import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check stored persistent accounts
    const accounts = JSON.parse(localStorage.getItem('primate_accounts') || '[]');
    const foundUser = accounts.find(
      (acc) => acc.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (!foundUser) {
      setError('No account found with this email. Please register first.');
      return;
    }

    if (foundUser.password && foundUser.password !== password) {
      setError('Incorrect password. Please try again.');
      return;
    }

    // Set active session
    localStorage.setItem('primate_user', JSON.stringify(foundUser));
    window.dispatchEvent(new Event('storage'));

    // Trigger email notification / verification from backend
    try {
      await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: foundUser.name,
          email: foundUser.email,
          password: foundUser.password
        })
      });
    } catch (err) {
      console.error('Error connecting to backend for email:', err);
    }

    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>KORV MMA Club</h2>
          <p>Sign in to your member account</p>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#fee2e2',
            color: '#b91c1c',
            padding: '0.65rem 0.9rem',
            borderRadius: '6px',
            fontSize: '0.85rem',
            fontWeight: '600',
            marginBottom: '1rem',
            border: '1px solid #fecaca'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="member@primatemma.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError('');
              }}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError('');
                }}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="auth-btn">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
