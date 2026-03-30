import { Search, Mic, MapPin, ArrowRight, LocateFixed, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ZONES } from '@/src/types';

export default function Explore() {
  const navigate = useNavigate();
  const selectedZone = MOCK_ZONES[0];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Mock Map Background */}
      <div className="absolute inset-0 bg-surface-container-high">
        <img 
          alt="City Map" 
          className="w-full h-full object-cover grayscale-[20%] opacity-80" 
          src="https://picsum.photos/seed/map/1920/1080" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/90 via-transparent to-surface/90 pointer-events-none"></div>
      </div>

      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-xl shadow-blue-900/5">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-screen-xl mx-auto">
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-blue-100 transition-colors active:scale-95">
              <Menu className="w-6 h-6 text-primary" />
            </button>
            <h1 className="text-xl font-extrabold text-primary font-headline tracking-tight">Precision Navigator</h1>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container/10">
            <img 
              alt="User" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/user/100/100" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Floating Search Bar */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-lg z-30">
        <div className="glass-card rounded-full px-6 py-3 flex items-center gap-3 shadow-lg shadow-on-surface/5 border border-white/40">
          <Search className="w-5 h-5 text-primary" />
          <input 
            className="bg-transparent border-none focus:ring-0 w-full font-body text-on-surface placeholder:text-on-surface-variant text-lg" 
            placeholder="Where are you heading?" 
            type="text"
          />
          <Mic className="w-5 h-5 text-on-surface-variant" />
        </div>
      </div>

      {/* Map Markers */}
      <div className="absolute top-1/2 left-1/3 z-20">
        <div className="bg-primary text-on-primary font-label text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          $4.50
        </div>
      </div>
      <div className="absolute top-1/3 right-1/4 z-20">
        <div className="bg-white text-primary font-label text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-primary/10">
          $6.00
        </div>
      </div>

      {/* Location Action Button */}
      <div className="absolute bottom-80 right-6 z-30">
        <button className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center text-primary active:scale-90 transition-all">
          <LocateFixed className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Detail Card */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl z-40"
      >
        <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-2xl shadow-primary/10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-md mb-2 font-label">Available Now</span>
              <h2 className="text-2xl font-headline font-extrabold text-primary leading-tight">{selectedZone.name}</h2>
              <p className="text-on-surface-variant text-sm font-body mt-1 flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {selectedZone.distance} away • {selectedZone.spotsFree} spots free
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-label text-on-surface-variant uppercase font-bold tracking-wider">Rate</p>
              <p className="text-2xl font-headline font-extrabold text-on-surface">${selectedZone.rate.toFixed(2)}<span className="text-sm font-normal text-on-surface-variant">/hr</span></p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-surface-container-low p-4 rounded-2xl">
              <p className="text-[10px] font-label text-on-surface-variant uppercase font-bold tracking-wider mb-1">Max Duration</p>
              <p className="text-sm font-semibold text-primary">{selectedZone.maxDuration}</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-2xl">
              <p className="text-[10px] font-label text-on-surface-variant uppercase font-bold tracking-wider mb-1">Security</p>
              <p className="text-sm font-semibold text-primary">{selectedZone.security}</p>
            </div>
          </div>

          <button 
            onClick={() => navigate('/wallet')}
            className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-2xl font-headline font-bold text-lg shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Select Spot
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
