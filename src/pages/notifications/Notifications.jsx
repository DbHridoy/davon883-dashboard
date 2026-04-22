import { Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const notificationsData = [
  { id: 1, text: 'Profile report!', time: 'Fri, 12:30pm' },
  { id: 2, text: 'A new Verification request!', time: 'Fri, 12:30pm' },
  { id: 3, text: 'Profile report!', time: 'Fri, 12:30pm' },
  { id: 4, text: 'Profile report!', time: 'Fri, 12:30pm' },
  { id: 5, text: 'A new user join in your app.', time: 'Fri, 12:30pm' },
  { id: 6, text: 'A new user join in your app.', time: 'Fri, 12:30pm' },
  { id: 7, text: 'A new user join in your app.', time: 'Fri, 12:30pm' },
  { id: 8, text: 'A new user join in your app.', time: 'Fri, 12:30pm' },
  { id: 9, text: 'A new user join in your app.', time: 'Fri, 12:30pm' },
];

const Notifications = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-4xl">
      <div className="bg-[var(--color-brand-card)] rounded-xl border border-white/5 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[var(--color-brand-gold)] px-6 py-5 flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="bg-transparent border-none text-[var(--color-brand-bg)] cursor-pointer flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <h2 className="text-2xl font-medium text-[var(--color-brand-bg)] m-0">All Notifications</h2>
        </div>

        {/* List */}
        <div className="p-8 flex flex-col gap-6">
          {notificationsData.map((notif) => (
            <div key={notif.id} className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-xl border border-[var(--color-brand-gold)] flex justify-center items-center text-[var(--color-brand-gold)] bg-transparent shrink-0">
                <Bell size={24} />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-200 text-lg m-0">{notif.text}</p>
                <span className="text-gray-500 text-sm">{notif.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
