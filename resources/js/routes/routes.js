import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Archive from '../pages/Archive';
import NoMatch from '../pages/NoMatch';
import AdminDashboard from '../pages/AdminDashboard';
import AddSlot from '../pages/AddSlot';
import ViewReservation from '../pages/ViewReservation';
import AddStaff from '../pages/AddStaff';

const routes = [
  {
    path: '/',
    exact: true,
    auth: true,
    component: AdminDashboard,
    fallback: Home,
  },
  {
    path: '/add-staff',
    exact: true,
    auth: true,
    component: AddStaff,
  },
  {
    path: '/add-slot',
    exact: true,
    auth: true,
    component: AddSlot,
  },
  {
    path: '/view-reservation',
    exact: true,
    auth: true,
    component: ViewReservation,
  },
  {
    path: '/login',
    exact: true,
    auth: false,
    component: Login,
  },
  {
    path: '/register',
    exact: true,
    auth: false,
    component: Register,
  },
  {
    path: '/forgot-password',
    exact: true,
    auth: false,
    component: ForgotPassword,
  },
  {
    path: '/reset-password',
    exact: true,
    auth: false,
    component: ResetPassword,
  },
  {
    path: '/archive',
    exact: true,
    auth: true,
    component: Archive,
  },
  {
    path: '',
    exact: false,
    auth: false,
    component: NoMatch,
  },
];

export default routes;
