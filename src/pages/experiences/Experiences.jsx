import { useState } from 'react';
import { Search, Plus, Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const experiencesData = [
  {
    id: 1,
    name: 'The Gilded Lounge',
    location: 'Upper East Side, New York',
    category: 'NIGHTLIFE',
    bookings: 124,
    revenue: '$18.2k',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=150&h=150'
  },
  {
    id: 2,
    name: "L'Eclat Gastronomy",
    location: 'Mayfair, London',
    category: 'DINING',
    bookings: 89,
    revenue: '$32.5k',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=150&h=150'
  },
  {
    id: 3,
    name: 'Azure Yacht Expeditions',
    location: 'Port Hercules, Monaco',
    category: 'OUTDOOR',
    bookings: 42,
    revenue: '$125.0k',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=150&h=150'
  },
  {
    id: 4,
    name: 'The Vault: Tasting Room',
    location: 'Ginza, Tokyo',
    category: 'NIGHTLIFE',
    bookings: 67,
    revenue: '$12.8k',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=150&h=150'
  }
];

const Experiences = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="flex flex-col gap-6">
      {/* Top Bar */}
      <div className="bg-[var(--color-brand-card)] rounded-xl p-6 border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-medium text-white m-0">Experience Manager</h2>
        <div className="flex items-center gap-6">
          {['All', 'Dining', 'Outdoor', 'Nightlife'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`bg-transparent border-none text-sm cursor-pointer pb-1 transition-colors ${
                activeTab === tab
                  ? 'text-[var(--color-brand-gold)] border-b-2 border-[var(--color-brand-gold)]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search experiences, venues, or locations..."
            className="w-full bg-[var(--color-brand-card)] border border-white/5 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
          />
        </div>
        <button 
          onClick={() => navigate('/experiences/add')}
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-[var(--color-brand-gold)] text-[var(--color-brand-bg)] border-none rounded-lg py-3 px-6 font-semibold cursor-pointer transition-transform hover:-translate-y-0.5"
        >
          <Plus size={20} />
          Add Experience
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {experiencesData.map((exp) => (
          <div key={exp.id} className="bg-[var(--color-brand-card)] rounded-xl p-6 border border-white/5 flex flex-col md:flex-row items-center gap-6">
            <img src={exp.image} alt={exp.name} className="w-24 h-24 rounded-lg object-cover" />
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-medium text-white m-0">{exp.name}</h3>
                <span className="bg-[#2a2a2a] text-[10px] uppercase tracking-wider px-3 py-1 rounded-full text-gray-300 font-medium">
                  {exp.category}
                </span>
              </div>
              <p className="text-gray-400 text-sm m-0 flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                {exp.location}
              </p>
            </div>
            
            <div className="flex items-center gap-12 w-full md:w-auto mt-4 md:mt-0 px-4 md:border-l border-white/5">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-gray-500 uppercase font-medium tracking-wider mb-1">Bookings</span>
                <span className="text-[var(--color-brand-gold)] font-medium text-xl">{exp.bookings}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-gray-500 uppercase font-medium tracking-wider mb-1">Revenue</span>
                <span className="text-white font-medium text-xl">{exp.revenue}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button className="bg-transparent border-none text-gray-500 hover:text-[var(--color-brand-gold)] cursor-pointer transition-colors p-2">
                <Edit2 size={18} />
              </button>
              <button className="bg-transparent border-none text-gray-500 hover:text-red-500 cursor-pointer transition-colors p-2">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-400">Showing 4 of 28 Experiences</span>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/5 bg-transparent text-gray-400 hover:text-white cursor-pointer transition-colors">{'<'}</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border-none bg-[var(--color-brand-gold)] text-[var(--color-brand-bg)] font-medium cursor-pointer">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/5 bg-transparent text-gray-400 hover:text-white cursor-pointer transition-colors">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/5 bg-transparent text-gray-400 hover:text-white cursor-pointer transition-colors">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/5 bg-transparent text-gray-400 hover:text-white cursor-pointer transition-colors">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
