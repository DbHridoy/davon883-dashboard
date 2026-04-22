import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Bell, Activity, Settings, LogOut, Star } from 'lucide-react';
import Logo from '../assets/Logo.svg';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // In a real app, clear auth tokens here
    console.log('Signing out...');
    navigate('/auth/login');
  };
  return (
    <aside className="hidden md:flex w-[260px] h-screen bg-[var(--color-brand-card)] flex-col border-r border-white/5 sticky top-0">
      <div className="p-10 px-6 flex justify-center items-center">
        <img src={Logo} alt="DAEVO" className="max-w-[150px] h-auto" />
      </div>
      
      <nav className="flex-1 flex flex-col px-4 gap-2">
        <NavLink to="/dashboard" className={({ isActive }) => `flex items-center gap-4 px-6 py-4 no-underline rounded-lg transition-all font-medium text-sm tracking-wide ${isActive ? 'bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] border-l-4 border-[var(--color-brand-gold)]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
          <LayoutDashboard size={20} />
          <span>DASHBOARD</span>
        </NavLink>
        <NavLink to="/users" className={({ isActive }) => `flex items-center gap-4 px-6 py-4 no-underline rounded-lg transition-all font-medium text-sm tracking-wide ${isActive ? 'bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] border-l-4 border-[var(--color-brand-gold)]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
          <Users size={20} />
          <span>USERS</span>
        </NavLink>

        <NavLink to="/analytics" className={({ isActive }) => `flex items-center gap-4 px-6 py-4 no-underline rounded-lg transition-all font-medium text-sm tracking-wide ${isActive ? 'bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] border-l-4 border-[var(--color-brand-gold)]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
          <Activity size={20} />
          <span>ANALYTICS</span>
        </NavLink>
        <NavLink to="/experiences" className={({ isActive }) => `flex items-center gap-4 px-6 py-4 no-underline rounded-lg transition-all font-medium text-sm tracking-wide ${isActive ? 'bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] border-l-4 border-[var(--color-brand-gold)]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
          <Star size={20} />
          <span>EXPERIENCES</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `flex items-center gap-4 px-6 py-4 no-underline rounded-lg transition-all font-medium text-sm tracking-wide ${isActive ? 'bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] border-l-4 border-[var(--color-brand-gold)]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </nav>

      <div className="p-6 border-t border-white/5">
        <button 
          onClick={handleSignOut}
          className="flex items-center gap-4 bg-transparent border-none text-gray-400 text-sm font-medium cursor-pointer py-3 px-4 w-full transition-colors hover:text-red-500"
        >
          <LogOut size={20} />
          <span>SIGN OUT</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
