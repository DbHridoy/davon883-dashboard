import { Outlet } from 'react-router-dom';
import Logo from '../assets/Logo.svg';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-brand-bg)] p-5">
      <div className="w-full max-w-[440px] bg-[#1A1C21] p-12 rounded-xl shadow-lg">
        <img src={Logo} alt="DÆVO Logo" className="block mx-auto mb-10 w-[140px] h-auto" />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
