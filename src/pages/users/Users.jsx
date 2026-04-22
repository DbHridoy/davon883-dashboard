import { useState } from 'react';
import { Search, ChevronDown, Eye, Ban } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlockUserModal from '../../components/modals/BlockUserModal';
import UserDetailsModal from '../../components/modals/UserDetailsModal';

const usersData = [
  { id: '01', name: 'Darrell Steward', email: 'georgia.young@example.com', phone: '(205) 555-0100', joined: 'Mar 1, 2024', avatar: 'D' },
  { id: '02', name: 'Wade Warren', email: 'sara.cruz@example.com', phone: '(704) 555-0127', joined: 'Mar 2, 2024', avatar: 'W' },
  { id: '03', name: 'Esther Howard', email: 'alma.lawson@example.com', phone: '(219) 555-0114', joined: 'Mar 3, 2024', avatar: 'E' },
  { id: '04', name: 'Cameron Williamson', email: 'nathan.roberts@example.com', phone: '(208) 555-0112', joined: 'Mar 3, 2024', avatar: 'C' },
  { id: '05', name: 'Brooklyn Simmons', email: 'felicia.reid@example.com', phone: '(225) 555-0118', joined: 'Mar 4, 2024', avatar: 'B' },
  { id: '06', name: 'Leslie Alexander', email: 'leslie.alexander@example.com', phone: '(252) 555-0126', joined: 'Mar 5, 2024', avatar: 'L' },
];

const Users = () => {
  const [isBlockModalOpen, setIsBlockModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [userToBlock, setUserToBlock] = useState(null);
  const [userToView, setUserToView] = useState(null);

  const handleBlockClick = (user) => {
    setUserToBlock(user);
    setIsBlockModalOpen(true);
  };

  const handleViewClick = (user) => {
    setUserToView(user);
    setIsDetailsModalOpen(true);
  };

  const handleConfirmBlock = () => {
    console.log(`Blocking user: ${userToBlock.name}`);
    setIsBlockModalOpen(false);
    setUserToBlock(null);
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4 md:gap-0">
        <h2 className="text-white text-2xl font-medium m-0">User List</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <div className="relative flex items-center w-full md:w-auto">
            <Search size={18} className="absolute left-3 text-gray-400" />
            <input type="text" placeholder="Search User" className="bg-[var(--color-brand-card)] border border-white/10 rounded-lg py-2.5 px-4 pl-10 text-white w-full md:w-[250px] text-sm outline-none transition-colors focus:border-[var(--color-brand-gold)] placeholder:text-gray-400" />
          </div>
          <Link to="/users/blocked" className="w-full md:w-auto p-2.5 px-4 bg-[var(--color-brand-gold)] text-black rounded-lg text-sm font-semibold transition-colors hover:bg-[var(--color-brand-gold-hover)] border-none cursor-pointer text-center no-underline">Blocked Users</Link>
        </div>
      </div>

      <div className="flex">
        <button className="flex items-center gap-2 bg-[var(--color-brand-card)] border border-white/10 text-gray-400 py-2 px-4 rounded-lg cursor-pointer text-sm transition-colors hover:bg-white/5 hover:text-white">
          Date <ChevronDown size={16} />
        </button>
      </div>

      <div className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="p-4 text-left border-b border-white/5 text-gray-400 font-medium text-[13px]">S.ID</th>
                <th className="p-4 text-left border-b border-white/5 text-gray-400 font-medium text-[13px]">Full Name</th>
                <th className="p-4 text-left border-b border-white/5 text-gray-400 font-medium text-[13px]">Email</th>
                <th className="p-4 text-left border-b border-white/5 text-gray-400 font-medium text-[13px]">Phone No</th>
                <th className="p-4 text-left border-b border-white/5 text-gray-400 font-medium text-[13px]">Joined Date</th>
                <th className="p-4 text-left border-b border-white/5 text-gray-400 font-medium text-[13px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id}>
                  <td className="p-4 text-left border-b border-white/5 text-gray-400">{user.id}</td>
                  <td className="p-4 text-left border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gold)]/20 text-[var(--color-brand-gold)] flex justify-center items-center font-semibold text-base">{user.avatar}</div>
                      <span className="text-white m-0 font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-left border-b border-white/5 text-gray-400">{user.email}</td>
                  <td className="p-4 text-left border-b border-white/5 text-gray-400">{user.phone}</td>
                  <td className="p-4 text-left border-b border-white/5 text-gray-400">{user.joined}</td>
                  <td className="p-4 text-left border-b border-white/5">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleBlockClick(user)}
                        className="w-8 h-8 rounded-lg border border-white/10 bg-transparent text-gray-400 flex justify-center items-center cursor-pointer transition-colors hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20"
                      >
                        <Ban size={16} />
                      </button>
                      <button 
                        onClick={() => handleViewClick(user)}
                        className="w-8 h-8 rounded-lg border border-white/10 bg-transparent text-gray-400 flex justify-center items-center cursor-pointer transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <Eye size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <BlockUserModal 
        isOpen={isBlockModalOpen} 
        onClose={() => setIsBlockModalOpen(false)} 
        onConfirm={handleConfirmBlock} 
        userName={userToBlock?.name} 
      />
      <UserDetailsModal 
        isOpen={isDetailsModalOpen} 
        onClose={() => setIsDetailsModalOpen(false)} 
        user={userToView} 
      />
    </div>
  );
};

export default Users;
