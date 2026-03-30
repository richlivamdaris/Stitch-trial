import { Map, Timer, Wallet, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function BottomNav() {
  const items = [
    { icon: Map, label: 'Explore', path: '/explore' },
    { icon: Timer, label: 'Sessions', path: '/sessions' },
    { icon: Wallet, label: 'Wallet', path: '/wallet' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 rounded-t-3xl bg-white shadow-[0_-4px_20px_0_rgba(7,30,39,0.06)]">
      <div className="flex justify-around items-center pt-3 pb-8 px-4 w-full">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center px-5 py-2 transition-all active:scale-90",
                isActive 
                  ? "bg-blue-100 text-primary rounded-2xl" 
                  : "text-slate-400 hover:bg-blue-50"
              )
            }
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="font-label text-[11px] font-semibold">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
