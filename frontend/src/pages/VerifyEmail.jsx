import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState('Verifying your account...');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetch(`http://localhost:5000/api/verify?token=${token}`)
        .then(res => {
          if (res.ok) {
            setStatus('Email verified! Redirecting to login...');
            setTimeout(() => navigate('/signin'), 3000);
          } else {
            setStatus('Verification failed. The link may have expired.');
          }
        })
        .catch(() => setStatus('Network error during verification.'));
    }
  }, [token, navigate]);

  return (
    <div className="verification-container" style={{ textAlign: 'center', padding: '4rem' }}>
      <h2>{status}</h2>
    </div>
  );
}

export default VerifyEmail;
