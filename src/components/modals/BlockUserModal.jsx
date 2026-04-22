import { X, Ban } from 'lucide-react';

const BlockUserModal = ({ isOpen, onClose, onConfirm, userName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[var(--color-brand-card)] border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-6 border-b border-white/5">
          <h3 className="text-xl text-white font-medium m-0">Block User</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-500 flex justify-center items-center mb-6">
            <Ban size={32} />
          </div>
          <h4 className="text-white text-lg font-medium mb-2">Are you sure?</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-0">
            Do you really want to block <span className="text-white font-semibold">{userName}</span>? This user will no longer be able to access their account or use our services.
          </p>
        </div>

        <div className="p-6 pt-4 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-white/10 bg-transparent text-white font-medium hover:bg-white/5 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm}
            className="flex-1 py-3 px-4 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors border-none cursor-pointer shadow-lg shadow-red-600/20"
          >
            Block User
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockUserModal;
