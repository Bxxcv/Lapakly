import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import Landing from '../pages/Landing.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import ForgotPassword from '../pages/ForgotPassword.jsx';
import Onboarding from '../pages/Onboarding.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Products from '../pages/Products.jsx';
import Orders from '../pages/Orders.jsx';
import Storefront from '../pages/Storefront.jsx';
import Checkout from '../pages/Checkout.jsx';
import Admin from '../pages/Admin.jsx';
import NotFound from '../pages/NotFound.jsx';

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="screen-loader">Menyiapkan workspace...</div>;
  return user ? children : <Navigate to="/login" replace />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/onboarding" element={<PrivateRoute><Onboarding /></PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
      <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
      <Route path="/u/:slug" element={<Storefront />} />
      <Route path="/checkout/:slug/:productId" element={<Checkout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
