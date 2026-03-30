import { ArrowLeft, MapPin, Minus, Plus, CheckCircle2, CreditCard, Lock, Apple } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ZONES } from '@/src/types';

export default function Wallet() {
  const navigate = useNavigate();
  const selectedZone = MOCK_ZONES[1]; // Central Plaza Garage

  return (
    <div className="min-h-screen pb-32 pt-24 px-6 max-w-lg mx-auto">
      {/* Top Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-xl shadow-blue-900/5">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-screen-xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-blue-100 transition-colors active:scale-95"
          >
            <ArrowLeft className="w-6 h-6 text-primary" />
          </button>
          <h1 className="text-xl font-extrabold text-primary font-headline tracking-tight">Precision Navigator</h1>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-container-high">
            <img 
              alt="User" 
              src="https://picsum.photos/seed/user/100/100" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Location Context */}
      <section className="mb-8">
        <p className="font-label text-sm text-on-surface-variant mb-1">Current Selection</p>
        <h2 className="font-headline text-3xl font-extrabold text-primary tracking-tight">{selectedZone.name}</h2>
        <div className="flex items-center gap-2 mt-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-body text-sm text-on-surface-variant">Zone {selectedZone.zone} • {selectedZone.level}, Spot {selectedZone.spot}</span>
        </div>
      </section>

      {/* Visual Duration Selector */}
      <section className="bg-surface-container-lowest rounded-3xl p-8 mb-6 shadow-xl shadow-blue-900/5 overflow-hidden relative">
        <div className="relative z-10 flex flex-col items-center">
          <h3 className="font-label font-bold text-on-surface-variant uppercase tracking-widest text-xs mb-8">Set Duration</h3>
          
          {/* Circular Dial Mockup */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[12px] border-surface-container-low"></div>
            <div className="absolute inset-0 rounded-full border-[12px] border-transparent border-t-on-tertiary-container border-r-on-tertiary-container rotate-[45deg]"></div>
            <div className="flex flex-col items-center">
              <span className="font-headline text-6xl font-extrabold text-primary">02:30</span>
              <span className="font-label font-semibold text-on-surface-variant">Hours : Minutes</span>
            </div>
            {/* Dial Handle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-4 border-on-tertiary-container flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-on-tertiary-container rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-between w-full mt-10">
            <button className="w-12 h-12 rounded-2xl bg-surface-container-low text-primary flex items-center justify-center active:scale-90 transition-transform">
              <Minus className="w-6 h-6" />
            </button>
            <div className="text-center">
              <p className="text-xs font-label text-on-surface-variant mb-1">ESTIMATED EXIT</p>
              <p className="font-headline font-bold text-lg text-primary">04:45 PM</p>
            </div>
            <button className="w-12 h-12 rounded-2xl bg-surface-container-low text-primary flex items-center justify-center active:scale-90 transition-transform">
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Cost Summary Card */}
      <section className="bg-surface-container-low rounded-3xl p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="font-body text-on-surface-variant">Rate (${selectedZone.rate.toFixed(2)} / hr)</span>
          <span className="font-body font-semibold text-on-surface">$15.00</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="font-body text-on-surface-variant">Service Fee</span>
          <span className="font-body font-semibold text-on-surface">$0.85</span>
        </div>
        <div className="h-px bg-outline-variant/20 mb-4"></div>
        <div className="flex justify-between items-end">
          <div>
            <span className="block font-label text-xs text-on-surface-variant uppercase tracking-wider">Total Amount</span>
            <span className="font-headline text-3xl font-extrabold text-primary">$15.85</span>
          </div>
          <div className="bg-tertiary-fixed px-3 py-1 rounded-full flex items-center gap-1 mb-1">
            <CheckCircle2 className="w-4 h-4 text-on-tertiary-fixed-variant" />
            <span className="text-[10px] font-bold text-on-tertiary-fixed-variant uppercase">Best Value</span>
          </div>
        </div>
      </section>

      {/* Payment Method Selector */}
      <section className="mb-8">
        <h3 className="font-headline text-lg font-bold text-primary mb-4">Payment Method</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl border-2 border-primary shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-black rounded flex items-center justify-center">
                <Apple className="w-5 h-5 text-white fill-current" />
              </div>
              <div>
                <p className="font-body font-semibold text-on-surface">Apple Pay</p>
                <p className="text-xs text-on-surface-variant">Default Wallet</p>
              </div>
            </div>
            <CheckCircle2 className="w-6 h-6 text-primary fill-primary text-white" />
          </div>
          <div className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl hover:bg-surface-container-high transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-surface-container-high rounded flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-body font-semibold text-on-surface">•••• 4242</p>
                <p className="text-xs text-on-surface-variant">Expires 12/26</p>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-outline-variant group-hover:border-primary transition-colors"></div>
          </div>
        </div>
      </section>

      {/* CTA Action */}
      <div className="fixed bottom-24 left-0 right-0 px-6 z-40">
        <button 
          onClick={() => navigate('/sessions')}
          className="w-full h-16 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-2xl font-headline font-bold text-lg shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95 transition-all"
        >
          <span>Confirm & Pay</span>
          <Lock className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
