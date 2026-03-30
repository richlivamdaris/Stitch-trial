import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SignIn from './components/SignIn';
import Explore from './components/Explore';
import Wallet from './components/Wallet';
import Sessions from './components/Sessions';
import BottomNav from './components/BottomNav';

function AppContent() {
  const location = useLocation();
  const showBottomNav = ['/explore', '/sessions', '/wallet', '/profile'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-surface">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<div className="p-8"><h1 className="text-2xl font-bold">Profile</h1><p>User settings and profile details.</p></div>} />
        <Route path="/" element={<Navigate to="/signin" replace />} />
      </Routes>
      {showBottomNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
