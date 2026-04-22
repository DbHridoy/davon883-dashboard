import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Eye, EyeOff } from 'lucide-react';
import { loginSuccess } from '../../features/auth/authSlice';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginSuccess({ user: { email }, token: 'dummy_token' }));
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-5 relative">
        <label className="block text-sm font-medium mb-2">Email *</label>
        <input 
          type="email" 
          className="w-full p-3.5 bg-transparent border border-[#3f3f46] rounded-md text-white text-sm outline-none transition-colors focus:border-[var(--color-brand-gold)]" 
          placeholder="mostain@gamil.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-5 relative">
        <label className="block text-sm font-medium mb-2">Password *</label>
        <div className="relative flex items-center">
          <input 
            type={showPassword ? "text" : "password"} 
            className="w-full p-3.5 bg-transparent border border-[#3f3f46] rounded-md text-white text-sm outline-none transition-colors focus:border-[var(--color-brand-gold)]" 
            placeholder="****"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div 
            className="absolute right-4 text-gray-400 cursor-pointer flex items-center justify-center" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8 text-sm">
        <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 accent-[var(--color-brand-gold)] cursor-pointer" />
          Remember password
        </label>
        <Link to="/auth/forgot-password" className="text-[var(--color-brand-gold)] no-underline hover:underline transition-opacity">Forgot password?</Link>
      </div>

      <button type="submit" className="w-full p-3.5 bg-[var(--color-brand-gold)] text-black rounded-md text-base font-semibold transition-colors hover:bg-[var(--color-brand-gold-hover)] flex justify-center items-center">Sign In</button>
    </form>
  );
};

export default Login;
