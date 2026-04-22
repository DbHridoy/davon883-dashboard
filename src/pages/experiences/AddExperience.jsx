import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ChevronDown } from 'lucide-react';

const AddExperience = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'The Midnight Gala',
    location: 'Mayfair, London',
    category: 'Dining',
    description: ''
  });
  
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full">
      <h2 className="text-3xl font-medium text-white m-0 tracking-tight">Add New Experience</h2>

      <div className="bg-[var(--color-brand-card)] rounded-2xl p-8 border border-white/5 relative">
        {/* Glow effect matching the design */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-brand-gold)]/5 to-transparent pointer-events-none rounded-r-2xl"></div>

        <form className="flex flex-col md:flex-row gap-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">EXPERIENCE NAME</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-5 py-4 text-gray-300 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors text-base"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">LOCATION</label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-5 py-4 text-gray-300 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors text-base"
                />
                <MapPin className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              </div>
            </div>

            <div className="flex flex-col gap-2 relative">
              <label className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">CATEGORY</label>
              <div 
                className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-5 py-4 text-white flex justify-between items-center cursor-pointer text-base"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              >
                <span>{formData.category}</span>
                <ChevronDown className="text-gray-500" size={20} />
              </div>

              {isCategoryOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#1e1e1e] border border-white/10 rounded-xl overflow-hidden z-20">
                  {['Dining', 'Outdoor', 'Nightlife'].map(cat => (
                    <div 
                      key={cat}
                      className={`px-5 py-4 cursor-pointer flex justify-between items-center transition-colors hover:bg-white/5 ${formData.category === cat ? 'bg-white/5' : ''}`}
                      onClick={() => {
                        setFormData({ ...formData, category: cat });
                        setIsCategoryOpen(false);
                      }}
                    >
                      <span className={formData.category === cat ? 'text-[var(--color-brand-gold)]' : 'text-gray-300'}>{cat}</span>
                      {formData.category === cat && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-brand-gold)]"><path d="M20 6L9 17l-5-5"></path></svg>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">EXPERIENCE DESCRIPTION</label>
            <textarea
              placeholder="Describe the atmosphere, exclusivity, and key highlights..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full h-full min-h-[300px] bg-[#1a1a1a] border border-white/5 rounded-xl px-5 py-4 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors resize-none text-base"
            />
          </div>
        </form>

        <div className="mt-12 pt-8 border-t border-white/5 flex justify-end gap-4 relative z-10">
          <button 
            onClick={() => navigate(-1)}
            className="bg-transparent border border-white/10 text-white rounded-xl py-3 px-8 text-sm font-bold tracking-widest uppercase hover:bg-white/5 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button 
            className="bg-[var(--color-brand-gold)] border border-[var(--color-brand-gold)] text-[var(--color-brand-bg)] rounded-xl py-3 px-10 text-sm font-bold tracking-widest uppercase hover:bg-opacity-90 transition-colors cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExperience;
