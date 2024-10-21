import './styles/global.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';  // Asegúrate de importar BrowserRouter
import HomePage from './pages/HomePage';
import Catalog from './pages/Catalog';
import ReviewOrder from './pages/ReviewOrder';
import ScheduleAppointment from './pages/ScheduleAppointment';
import AdminDashboard from './pages/AdminDashboard';
import AdminPanel from './pages/AdminPanel';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  const location = useLocation();  // Hook useLocation para obtener la ruta actual

  // Condicionamos el navbar basado en la ruta actual
  const noNavbarRoutes = ['/login', '/profile'];

  return (
    <>
      {/* Renderiza el Navbar solo si no estamos en una ruta del array noNavbarRoutes */}
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/review-order" element={<ReviewOrder />} />
        <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}