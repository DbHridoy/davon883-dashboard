import { Share2, TrendingUp, CalendarDays } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const statData = [
  { title: 'TOTAL REACH', value: '1,248,302', change: '+12.5%', icon: Share2 },
  { title: 'ENGAGEMENT RATE', value: '24.8%', change: '+4.2%', icon: TrendingUp },
  { title: 'ACTIVE BOOKINGS', value: '842', change: null, icon: CalendarDays },
];

const trendData = [
  { name: 'JAN', value: 1000 },
  { name: 'FEB', value: 1500 },
  { name: 'MAR', value: 2500 },
  { name: 'APR', value: 3000 },
  { name: 'MAY', value: 3200 },
  { name: 'JUN', value: 4500 },
  { name: 'JUL', value: 6400 },
  { name: 'AUG', value: 6800 },
];

const distributionData = [
  { name: 'Outdoor', value: 42, color: '#D9B46E' },
  { name: 'Dining', value: 28, color: '#A68444' },
  { name: 'Nightlife', value: 30, color: '#594A2D' },
];

const topExperiences = [
  { name: 'Private Island Escape', demand: '94%' },
  { name: 'Midnight Vineyard Tour', demand: '88%' },
  { name: 'Helicopter Alps Dinner', demand: '72%' },
  { name: 'Vintage Yacht Regatta', demand: '65%' },
  { name: 'Desert Sky Observatory', demand: '58%' },
  { name: 'Subterranean Jazz Club', demand: '45%' },
];

const Analytics = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl font-medium m-0">Analytics</h2>
        <div className="relative">
          <input type="text" placeholder="Search Analytics" className="bg-[var(--color-brand-card)] border border-white/10 rounded-lg py-2.5 px-4 text-white w-full md:w-[250px] text-sm outline-none transition-colors focus:border-[var(--color-brand-gold)] placeholder:text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl p-6 flex flex-col">
              <div className="flex justify-between items-center w-full mb-6">
                <div className="w-10 h-10 bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] rounded-lg flex justify-center items-center">
                  <Icon size={20} />
                </div>
                {stat.change && <span className="bg-white/5 text-white px-3 py-1 rounded-full text-xs font-medium">{stat.change}</span>}
              </div>
              <div>
                <p className="text-gray-400 text-xs tracking-wider m-0 mb-1">{stat.title}</p>
                <h3 className="text-white text-3xl font-semibold m-0">{stat.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-[var(--color-brand-card)] border border-white/5 rounded-xl p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-white m-0 mb-1 font-medium">User Growth Trend</h3>
              <p className="text-gray-400 m-0 text-[13px]">Monthly acquisition and retention performance</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-xs tracking-wider m-0 mb-1">GROWTH RATE</p>
              <h3 className="text-[var(--color-brand-gold)] text-3xl font-semibold m-0">+24%</h3>
            </div>
          </div>
          <div className="mt-6">
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={trendData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-brand-gold)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-brand-gold)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} />
                <YAxis hide={true} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-brand-card)', borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                />
                <Area type="monotone" dataKey="value" stroke="var(--color-brand-gold)" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-white m-0 mb-1 font-medium">Content Distribution</h3>
            <p className="text-gray-400 m-0 text-[13px]">Category engagement split</p>
          </div>
          <div className="relative flex justify-center items-center mt-4">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'var(--color-brand-card)', borderColor: 'rgba(255,255,255,0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute text-center flex flex-col items-center justify-center">
              <h3 className="text-white text-2xl m-0 font-semibold">6.4k</h3>
              <p className="text-gray-400 text-[10px] m-0 tracking-[1px]">TOTAL ASSETS</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            {distributionData.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-gray-400 text-sm">{item.name}</span>
                </div>
                <span className="text-white text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 bg-[var(--color-brand-card)] border border-white/5 rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-white m-0 mb-1 font-medium">Most Added Experiences</h3>
          <p className="text-gray-400 m-0 text-[13px]">Top performing bespoke offerings</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 mt-6">
          {topExperiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-white text-sm">{exp.name}</span>
                <span className="text-[var(--color-brand-gold)] text-sm">{exp.demand} Demand</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-sm overflow-hidden">
                <div className="h-full bg-[var(--color-brand-gold)] rounded-sm" style={{ width: exp.demand }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
