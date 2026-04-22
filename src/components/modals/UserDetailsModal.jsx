import { X, Mail, Phone, Calendar, Shield } from 'lucide-react';

const UserDetailsModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[var(--color-brand-card)] border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <h3 className="text-xl text-white font-medium m-0">User Details</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-[var(--color-brand-gold)]/20 text-[var(--color-brand-gold)] flex justify-center items-center font-bold text-3xl mb-4 border-2 border-[var(--color-brand-gold)]/30 shadow-inner">
              {user.avatar}
            </div>
            <h4 className="text-white text-2xl font-semibold mb-1">{user.name}</h4>
            <p className="text-[var(--color-brand-gold)] text-sm font-medium uppercase tracking-wider">Active Member</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-gray-500 text-[11px] uppercase tracking-widest font-bold">User ID</span>
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex justify-center items-center">
                  <Shield size={16} className="text-[var(--color-brand-gold)]" />
                </div>
                <span className="font-medium">#USR-{user.id}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-500 text-[11px] uppercase tracking-widest font-bold">Email Address</span>
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex justify-center items-center">
                  <Mail size={16} className="text-[var(--color-brand-gold)]" />
                </div>
                <span className="font-medium truncate">{user.email}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-500 text-[11px] uppercase tracking-widest font-bold">Phone Number</span>
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex justify-center items-center">
                  <Phone size={16} className="text-[var(--color-brand-gold)]" />
                </div>
                <span className="font-medium">{user.phone}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-gray-500 text-[11px] uppercase tracking-widest font-bold">Joined Date</span>
              <div className="flex items-center gap-3 text-gray-200">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex justify-center items-center">
                  <Calendar size={16} className="text-[var(--color-brand-gold)]" />
                </div>
                <span className="font-medium">{user.joined}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 pt-4 flex justify-end">
          <button 
            onClick={onClose}
            className="py-3 px-8 rounded-xl bg-[var(--color-brand-gold)] text-black font-bold hover:bg-[var(--color-brand-gold-hover)] transition-all transform active:scale-95 cursor-pointer border-none shadow-lg shadow-[var(--color-brand-gold)]/20"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
