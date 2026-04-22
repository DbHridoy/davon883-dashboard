import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera } from 'lucide-react';

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: 'James Anderson',
    email: 'james.anderson@example.com',
    phone: '+1 (555) 000-0000',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[800px]">
      <div className="flex items-center gap-4">
        <Link to="/settings" className="text-gray-400 hover:text-white transition-colors no-underline">
          Settings
        </Link>
        <span className="text-gray-600">/</span>
        <h2 className="text-white text-xl font-medium m-0">Admin Profile</h2>
      </div>

      <div className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl overflow-hidden p-8">
        <form className="flex flex-col gap-6 max-w-[500px]" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2 items-center mb-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[var(--color-brand-gold)]/20 text-[var(--color-brand-gold)] flex justify-center items-center font-bold text-3xl overflow-hidden">
                J
              </div>
              <button 
                type="button" 
                className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[var(--color-brand-gold)] text-black flex justify-center items-center cursor-pointer border-2 border-[var(--color-brand-card)] transition-colors hover:bg-[var(--color-brand-gold-hover)]"
              >
                <Camera size={14} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-[var(--color-brand-gold)] transition-colors"
              placeholder="Enter full name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-[var(--color-brand-gold)] transition-colors"
              placeholder="Enter email address"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Phone Number</label>
            <input 
              type="text" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-[var(--color-brand-gold)] transition-colors"
              placeholder="Enter phone number"
            />
          </div>

          <button className="w-full bg-[var(--color-brand-gold)] text-black font-semibold py-3 rounded-lg mt-4 cursor-pointer hover:bg-[var(--color-brand-gold-hover)] transition-colors border-none">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
