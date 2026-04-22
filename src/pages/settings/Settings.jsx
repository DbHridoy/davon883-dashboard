import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const settingsLinks = [
  { name: 'Admin Profile', path: '/settings/profile' },
  { name: 'Change Password', path: '/settings/change-password' },
  { name: 'Privacy Policy', path: '/settings/privacy-policy' },
  { name: 'Terms & Conditions', path: '/settings/terms-conditions' },
  { name: 'About Us', path: '/settings/about' }
];

const Settings = () => {
  return (
    <div className="flex justify-start w-full max-w-[800px]">
      <div className="w-full bg-[var(--color-brand-card)] rounded-xl overflow-hidden border border-white/5">
        <div className="bg-[var(--color-brand-gold)] px-8 py-6">
          <h2 className="text-[var(--color-brand-bg)] text-2xl font-medium m-0">Settings</h2>
        </div>
        <div className="px-8 pb-8 pt-4 flex flex-col">
          {settingsLinks.map((link, index) => (
            <Link to={link.path} key={index} className="group flex justify-between items-center py-5 border-b border-white/5 last:border-b-0 text-white text-base cursor-pointer transition-colors hover:text-[var(--color-brand-gold)] no-underline">
              <span>{link.name}</span>
              <ChevronRight size={18} className="text-gray-400 transition-colors group-hover:text-[var(--color-brand-gold)]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
