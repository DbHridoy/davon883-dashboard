import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const SetNewPassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/auth/login');
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-left mb-6 mt-0">Set new password</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-5 relative">
          <label className="block text-sm font-medium mb-2">Current Password *</label>
          <div className="relative flex items-center">
            <input 
              type={showCurrentPassword ? "text" : "password"} 
              className="w-full p-3.5 bg-transparent border border-[#3f3f46] rounded-md text-white text-sm outline-none transition-colors focus:border-[var(--color-brand-gold)]" 
              placeholder="********"
              required
            />
            <div className="absolute right-4 text-gray-400 cursor-pointer flex items-center justify-center" onClick={() => setShowCurrentPassword(!showCurrentPassword)}>
              {showCurrentPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </div>
          </div>
        </div>

        <div className="mb-5 relative">
          <label className="block text-sm font-medium mb-2">New Password *</label>
          <div className="relative flex items-center">
            <input 
              type={showNewPassword ? "text" : "password"} 
              className="w-full p-3.5 bg-transparent border border-[#3f3f46] rounded-md text-white text-sm outline-none transition-colors focus:border-[var(--color-brand-gold)]" 
              placeholder="********"
              required
            />
            <div className="absolute right-4 text-gray-400 cursor-pointer flex items-center justify-center" onClick={() => setShowNewPassword(!showNewPassword)}>
              {showNewPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </div>
          </div>
        </div>

        <div className="mb-5 relative">
          <label className="block text-sm font-medium mb-2">Confirm New Password *</label>
          <div className="relative flex items-center">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              className="w-full p-3.5 bg-transparent border border-[#3f3f46] rounded-md text-white text-sm outline-none transition-colors focus:border-[var(--color-brand-gold)]" 
              placeholder="********"
              required
            />
            <div className="absolute right-4 text-gray-400 cursor-pointer flex items-center justify-center" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </div>
          </div>
        </div>

        <button type="submit" className="w-full p-3.5 bg-[var(--color-brand-gold)] text-black rounded-md text-base font-semibold transition-colors hover:bg-[var(--color-brand-gold-hover)] flex justify-center items-center">Sign Up</button>
      </form>
    </div>
  );
};

export default SetNewPassword;
