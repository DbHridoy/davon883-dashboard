import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col gap-6 w-full max-w-[800px]">
      <div className="flex items-center gap-4">
        <Link to="/settings" className="text-gray-400 hover:text-white transition-colors no-underline">
          Settings
        </Link>
        <span className="text-gray-600">/</span>
        <h2 className="text-white text-xl font-medium m-0">Change Password</h2>
      </div>

      <div className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl overflow-hidden p-8">
        <form className="flex flex-col gap-6 max-w-[500px]" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Current Password</label>
            <div className="relative">
              <input 
                type={showCurrentPassword ? "text" : "password"} 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-[var(--color-brand-gold)] transition-colors pr-12"
                placeholder="Enter current password"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-gray-400 cursor-pointer hover:text-white"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">New Password</label>
            <div className="relative">
              <input 
                type={showNewPassword ? "text" : "password"} 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-[var(--color-brand-gold)] transition-colors pr-12"
                placeholder="Enter new password"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-gray-400 cursor-pointer hover:text-white"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Confirm New Password</label>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-[var(--color-brand-gold)] transition-colors pr-12"
                placeholder="Confirm new password"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-gray-400 cursor-pointer hover:text-white"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button className="w-full bg-[var(--color-brand-gold)] text-black font-semibold py-3 rounded-lg mt-4 cursor-pointer hover:bg-[var(--color-brand-gold-hover)] transition-colors border-none">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
