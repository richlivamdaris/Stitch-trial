import { Menu, Map, Info, PlusCircle, XCircle, Timer, Wallet, User } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_ZONES } from '@/src/types';

export default function Sessions() {
  const activeZone = MOCK_ZONES[2]; // Metropolis Plaza

  return (
    <div className="min-h-screen pb-32 pt-24 px-6 max-w-screen-md mx-auto">
      {/* Top Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-xl shadow-blue-900/5">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-screen-xl mx-auto">
          <button className="p-2 rounded-full hover:bg-blue-100 transition-colors text-primary active:scale-95">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="font-headline font-bold tracking-tight text-xl text-primary">Precision Navigator</h1>
          <div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container-high border-2 border-white shadow-sm">
            <img 
              alt="User" 
              src="https://picsum.photos/seed/user/100/100" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Live Status Badge */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label text-sm font-bold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-on-tertiary-container opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-on-tertiary-container"></span>
          </span>
          LIVE SESSION
        </div>
      </div>

      {/* Main Timer Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Countdown Section */}
        <div className="bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-xl shadow-on-surface/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <img 
              alt="Texture" 
              src="https://picsum.photos/seed/abstract/500/500" 
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Circular Progress Ring */}
          <div className="relative w-64 h-64 mb-6 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90">
              <circle className="text-surface-container-high" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-on-tertiary-container" cx="128" cy="128" fill="transparent" r="110" stroke="currentColor" strokeDasharray="691" stroke-dashoffset="200" stroke-linecap="round" stroke-width="12"></circle>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="font-headline text-5xl font-extrabold text-primary tracking-tighter">01:42:15</span>
              <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">Remaining</span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-body text-on-surface-variant text-sm">Ends at 18:45</span>
          </div>
        </div>

        {/* Cost & Location Column */}
        <div className="flex flex-col gap-6">
          {/* Current Accrued Cost */}
          <div className="bg-primary timer-gradient rounded-[2rem] p-8 text-on-primary shadow-lg shadow-primary/20">
            <span className="font-label text-xs font-bold opacity-70 uppercase tracking-widest">Current Cost</span>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="font-headline text-5xl font-extrabold">$12.50</span>
              <span className="font-body text-lg opacity-80">USD</span>
            </div>
            <div className="mt-6 flex items-center gap-2 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
              <Info className="w-5 h-5 text-tertiary-fixed" />
              <p className="text-xs font-medium leading-relaxed">Rate: $4.00/hr • Evening Premium applied</p>
            </div>
          </div>

          {/* Zone Info Card */}
          <div className="bg-surface-container-high rounded-[2rem] p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex flex-col">
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">Location</span>
                <h3 className="font-headline text-xl font-bold text-primary mt-1">{activeZone.name}</h3>
                <p className="text-on-surface-variant text-sm">Zone {activeZone.zone} • {activeZone.level}</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                <Map className="w-6 h-6" />
              </div>
            </div>
            <div className="w-full h-24 rounded-2xl overflow-hidden grayscale opacity-80">
              <img 
                alt="Map" 
                src="https://picsum.photos/seed/mini-map/400/200" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Details Section */}
      <section className="mt-8 bg-surface-container-lowest rounded-[2rem] p-8 shadow-xl shadow-on-surface/5 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container-high">
          <img 
            alt="Vehicle" 
            src="https://picsum.photos/seed/car/400/300" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 w-full">
          <div className="flex flex-col mb-6">
            <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">Active Vehicle</span>
            <h3 className="font-headline text-2xl font-bold text-primary mt-1">BMW 3 Series</h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="px-3 py-1 bg-surface-container text-primary font-mono font-bold rounded-lg border border-outline-variant/20 uppercase tracking-tighter">B-8822-TX</span>
              <div className="h-4 w-px bg-outline-variant"></div>
              <span className="text-sm font-medium text-on-surface-variant">Midnight Blue</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Timer className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">EV Charging Active</span>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <Info className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Insured Session</span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Actions */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-3 py-5 px-8 rounded-2xl timer-gradient text-white font-headline font-bold text-lg shadow-xl shadow-primary/20 active:scale-[0.98] transition-all">
          <PlusCircle className="w-6 h-6" />
          Extend Session
        </button>
        <button className="flex items-center justify-center gap-3 py-5 px-8 rounded-2xl bg-red-100 text-red-700 font-headline font-bold text-lg active:scale-[0.98] transition-all">
          <XCircle className="w-6 h-6" />
          End Session
        </button>
      </section>

      {/* Signature Floating Status */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-40">
        <div className="glass-card rounded-[1.5rem] p-4 flex items-center justify-between shadow-2xl shadow-primary/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-on-tertiary-container/10 flex items-center justify-center">
              <Timer className="w-6 h-6 text-on-tertiary-container" />
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Active for</p>
              <p className="font-headline font-extrabold text-primary text-lg leading-tight">02h 18m</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Next Tier</p>
            <p className="font-body font-semibold text-primary text-sm">+ $1.50 at 3h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
