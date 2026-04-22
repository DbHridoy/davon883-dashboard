import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSendCode = (e) => {
    e.preventDefault();
    if (!email) {
      setError(true);
      return;
    }
    setError(false);
    navigate('/auth/verify-otp');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-left mb-6 mt-0">Forget Password</h2>
      <p className="text-sm text-gray-400 text-left mb-8 leading-relaxed">Enter your email address to get a verification code for resetting your password.</p>

      <form onSubmit={handleSendCode}>
        <div className="mb-5 relative">
          <input 
            type="email" 
            className="w-full p-3.5 bg-transparent border border-[#3f3f46] rounded-md text-white text-sm outline-none transition-colors focus:border-[var(--color-brand-gold)]" 
            placeholder="mostain@gamil.com" 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(false);
            }}
          />
          {error && <div className="text-red-500 text-xs mt-1.5">Email is Required</div>}
        </div>

        <button type="submit" className="w-full p-3.5 bg-[var(--color-brand-gold)] text-black rounded-md text-base font-semibold transition-colors hover:bg-[var(--color-brand-gold-hover)] flex justify-center items-center">Send Code</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
