import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Auth.css';

function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save account in persistent storage & set active session
    const accounts = JSON.parse(localStorage.getItem('primate_accounts') || '[]');
    const existingIndex = accounts.findIndex(
      (acc) => acc.email.toLowerCase() === formData.email.trim().toLowerCase()
    );

    const newAccount = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
      memberId: 'PMMA-' + Math.floor(1000 + Math.random() * 9000),
      plan: 'Unlimited MMA & Fitness',
      status: 'Active',
      joinDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      photo: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || 'Member')}&background=d32f2f&color=fff&size=80&bold=true`
    };

    if (existingIndex !== -1) {
      accounts[existingIndex] = newAccount;
    } else {
      accounts.push(newAccount);
    }

    localStorage.setItem('primate_accounts', JSON.stringify(accounts));
    // Don't auto-login session on signup so user isn't immediately authenticated until they sign in
    window.dispatchEvent(new Event('storage'));
    
    // Express registration logic
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newAccount.name,
          email: newAccount.email,
          password: newAccount.password
        })
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        console.warn('Email verification warning:', data.error || response.statusText);
      }
    } catch (error) {
      console.error('Error connecting to backend during registration:', error);
    }

    console.log('Account successfully created for:', formData.name);
    navigate('/');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Join KORV MMA Club</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          
          <div className="input-group">
            <label>Password</label>
            <div className="password-container">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                value={formData.password}
                onChange={handleChange} 
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

          <div className="input-group">
            <label>Confirm Password</label>
            <div className="password-container">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                name="confirmPassword" 
                value={formData.confirmPassword}
                onChange={handleChange} 
                required 
              />
              <button 
                type="button" 
                className="password-toggle" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Your existing primary submit button */}
          <button type="submit" className="auth-btn">Sign Up</button>
          
          {/* New Delete Button */}
          <button 
            type="button" 
            className="danger-btn-outline"
            onClick={() => alert("Backend requires an authenticated user ID to delete an account.")}
          >
            Delete Account
          </button>
        </form>
        <p className="auth-footer">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
