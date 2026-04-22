import { Users, Sparkles, Calendar, Eye, Ban, Trash2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const statData = [
  { title: 'Total Users', value: '45,231', increase: '~ 12%', icon: Users },
  { title: 'Itineraries Generated', value: '12,845', increase: '~ 8.4%', icon: Sparkles },
  { title: 'Active Plans', value: '3,214', increase: '~ 2.1%', icon: Calendar },
];

const chartData = [
  { name: 'Adventure', value: 85 },
  { name: 'Relaxation', value: 65 },
  { name: 'Culture', value: 45 },
  { name: 'Food & Drink', value: 75 },
  { name: 'Wellness', value: 35 },
];

const recentItineraries = [
  { id: 1, name: 'Alice Smith', email: 'alice@example.com', status: 'ACTIVE', lastActive: '2 mins ago' },
  { id: 2, name: 'Bob Jones', email: 'bob@example.com', status: 'SUSPENDED', lastActive: '5 hours ago' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', status: 'ACTIVE', lastActive: '1 day ago' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', status: 'ACTIVE', lastActive: '2 days ago' },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {statData.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--color-brand-gold)]/10 text-[var(--color-brand-gold)] rounded-lg flex justify-center items-center">
                <Icon size={24} />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm m-0 mb-2">{stat.title}</p>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-white text-2xl font-semibold m-0">{stat.value}</h3>
                  <span className="text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full text-xs font-medium">{stat.increase}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-[var(--color-brand-card)] border border-white/5 rounded-xl p-6">
          <div>
            <h3 className="text-white m-0 mb-1 font-medium text-lg">Popular Experience Categories</h3>
            <p className="text-gray-400 m-0 text-[13px]">Based on recent user selections</p>
          </div>
          <div className="mt-6">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'var(--text-secondary)' }} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: 'var(--color-brand-card)', borderColor: 'rgba(255,255,255,0.1)', color: 'white' }}
                />
                <Bar dataKey="value" fill="var(--color-brand-gold)" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-white m-0 font-medium text-lg">Concierge AI Status</h3>
            <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-medium">Operational</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <p className="text-gray-400 m-0 text-sm">Response Time</p>
              <h4 className="text-white m-0 text-base font-medium">1.2s avg</h4>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <p className="text-gray-400 m-0 text-sm">Success Rate</p>
              <h4 className="text-white m-0 text-base font-medium">99.8%</h4>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <p className="text-gray-400 m-0 text-sm">Active Sessions</p>
              <h4 className="text-white m-0 text-base font-medium">1,245</h4>
            </div>
          </div>
          <button className="w-full mt-4 p-3.5 bg-[var(--color-brand-gold)] text-black rounded-md text-sm font-semibold transition-colors hover:bg-[var(--color-brand-gold-hover)] border-none cursor-pointer">View System Logs</button>
        </div>
      </div>

      <div className="bg-[var(--color-brand-card)] border border-white/5 rounded-xl p-6">
        <div className="mb-6">
          <h3 className="text-white m-0 mb-1 font-medium text-lg">Recent Active Itineraries</h3>
          <p className="text-gray-400 m-0 text-[13px]">Real-time updates on active travel plans</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="p-4 text-left border-b border-white/5 text-gray-400 font-medium text-[13px]">Member Details</th>
                <th className="p-4 text-left border-b border-white/5 text-gray-400 font-medium text-[13px]">Status</th>
                <th className="p-4 text-left border-b border-white/5 text-gray-400 font-medium text-[13px]">Last Active</th>
                <th className="p-4 text-left border-b border-white/5 text-gray-400 font-medium text-[13px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentItineraries.map((item) => (
                <tr key={item.id}>
                  <td className="p-4 text-left border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-brand-gold)]/20 text-[var(--color-brand-gold)] flex justify-center items-center font-semibold text-base">{item.name.charAt(0)}</div>
                      <div>
                        <p className="text-white m-0 mb-1 font-medium text-sm">{item.name}</p>
                        <p className="text-gray-400 m-0 text-[13px]">{item.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-left border-b border-white/5">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'ACTIVE' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-left border-b border-white/5 text-gray-400 text-sm">{item.lastActive}</td>
                  <td className="p-4 text-left border-b border-white/5">
                    <div className="flex gap-2">
                      <button className="w-8 h-8 rounded-lg border border-white/10 bg-transparent text-gray-400 flex justify-center items-center cursor-pointer transition-colors hover:bg-white/5 hover:text-white"><Eye size={16} /></button>
                      <button className="w-8 h-8 rounded-lg border border-white/10 bg-transparent text-gray-400 flex justify-center items-center cursor-pointer transition-colors hover:bg-white/5 hover:text-white"><Ban size={16} /></button>
                      <button className="w-8 h-8 rounded-lg border border-white/10 bg-transparent text-gray-400 flex justify-center items-center cursor-pointer transition-colors hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/20"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
