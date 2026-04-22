import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Login from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';
import VerifyOTP from '../pages/auth/VerifyOTP';
import SetNewPassword from '../pages/auth/SetNewPassword';
import Dashboard from '../pages/dashboard/Dashboard';
import Users from '../pages/users/Users';
import BlockedUsers from '../pages/users/BlockedUsers';
import Analytics from '../pages/analytics/Analytics';
import Settings from '../pages/settings/Settings';
import Profile from '../pages/settings/Profile';
import ChangePassword from '../pages/settings/ChangePassword';
import PrivacyPolicy from '../pages/settings/PrivacyPolicy';
import TermsConditions from '../pages/settings/TermsConditions';
import AboutUs from '../pages/settings/AboutUs';
import Experiences from '../pages/experiences/Experiences';
import AddExperience from '../pages/experiences/AddExperience';
import Notifications from '../pages/notifications/Notifications';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/blocked',
        element: <BlockedUsers />,
      },
      {
        path: '/analytics',
        element: <Analytics />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/settings/profile',
        element: <Profile />,
      },
      {
        path: '/settings/change-password',
        element: <ChangePassword />,
      },
      {
        path: '/settings/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/settings/terms-conditions',
        element: <TermsConditions />,
      },
      {
        path: '/settings/about',
        element: <AboutUs />,
      },
      {
        path: '/experiences',
        element: <Experiences />,
      },
      {
        path: '/experiences/add',
        element: <AddExperience />,
      },
      {
        path: '/notifications',
        element: <Notifications />,
      },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/auth/verify-otp',
        element: <VerifyOTP />,
      },
      {
        path: '/auth/set-new-password',
        element: <SetNewPassword />,
      },
    ],
  },
]);
