import { Menu, MessageSquare, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-[88px] flex justify-between items-center px-6 lg:px-10 border-b border-white/5 bg-transparent">
      <div className="flex items-center gap-6">
        <button className="block md:hidden bg-transparent border-none text-[var(--color-brand-gold)] cursor-pointer">
          <Menu size={24} />
        </button>
        <div className="hidden md:block">
          <h1 className="text-xl text-[var(--color-brand-gold)] m-0 mb-1 font-medium">Welcome,James</h1>
          <p className="text-gray-400 text-[13px] m-0">Have a nice day!</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="w-11 h-11 rounded-full border border-[var(--color-brand-gold)] bg-transparent text-[var(--color-brand-gold)] flex justify-center items-center cursor-pointer transition-all hover:bg-[var(--color-brand-gold)]/10 relative">
          <MessageSquare size={20} />
        </button>
        <Link to="/notifications" className="w-11 h-11 rounded-full border border-[var(--color-brand-gold)] bg-transparent text-[var(--color-brand-gold)] flex justify-center items-center cursor-pointer transition-all hover:bg-[var(--color-brand-gold)]/10 relative no-underline">
          <Bell size={20} />
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex justify-center items-center border-2 border-[var(--color-brand-bg)]">1</span>
        </Link>
        <button className="w-11 h-11 rounded-full border border-[var(--color-brand-gold)] bg-transparent text-[var(--color-brand-gold)] flex justify-center items-center cursor-pointer transition-all hover:bg-[var(--color-brand-gold)]/10 relative">
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
