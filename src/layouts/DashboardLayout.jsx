import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[var(--color-brand-bg)]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-4 md:p-10 overflow-y-auto max-h-[calc(100vh-88px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
