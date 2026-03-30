import { Car, ArrowRight, Apple } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/explore');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-10">
        {/* Hero Branding Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left space-y-4"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-container rounded-xl flex items-center justify-center shadow-2xl shadow-primary/20">
            <Car className="text-on-primary w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h2 className="font-headline text-4xl font-extrabold text-primary tracking-tight">Precision Navigator</h2>
            <p className="font-body text-on-surface-variant text-lg">Effortless parking for the modern driver.</p>
          </div>
        </motion.div>

        {/* Login Form Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_-4px_20px_0_rgba(7,30,39,0.06)] space-y-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="font-label text-sm font-semibold text-on-surface-variant block" htmlFor="email">Email Address</label>
              <div className="relative group">
                <input 
                  className="w-full bg-surface-container-low border-none rounded-b-lg focus:ring-0 focus:bg-surface-container-high transition-colors font-body py-4 px-4 text-on-surface placeholder:text-outline-variant" 
                  id="email" 
                  placeholder="driver@velocity.com" 
                  type="email" 
                  required
                />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-outline-variant opacity-20"></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-label text-sm font-semibold text-on-surface-variant" htmlFor="password">Password</label>
                <a className="text-primary font-label text-xs font-bold hover:underline" href="#">Forgot Password?</a>
              </div>
              <div className="relative group">
                <input 
                  className="w-full bg-surface-container-low border-none rounded-b-lg focus:ring-0 focus:bg-surface-container-high transition-colors font-body py-4 px-4 text-on-surface placeholder:text-outline-variant" 
                  id="password" 
                  placeholder="••••••••" 
                  type="password" 
                  required
                />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-outline-variant opacity-20"></div>
              </div>
            </div>

            <button 
              className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2" 
              type="submit"
            >
              Sign In
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="relative flex items-center py-2">
            <div className="flex-grow h-px bg-surface-container-high"></div>
            <span className="flex-shrink mx-4 text-outline-variant font-label text-xs uppercase tracking-widest">or continue with</span>
            <div className="flex-grow h-px bg-surface-container-high"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 px-4 bg-surface rounded-xl hover:bg-surface-container-low transition-colors active:scale-95 border border-outline-variant/10">
              <img 
                alt="Google" 
                className="w-5 h-5" 
                src="https://www.google.com/favicon.ico" 
                referrerPolicy="no-referrer"
              />
              <span className="font-label text-sm font-bold text-on-surface">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 px-4 bg-on-surface text-surface rounded-xl hover:opacity-90 transition-colors active:scale-95 shadow-lg shadow-on-surface/5">
              <Apple className="w-5 h-5 fill-current" />
              <span className="font-label text-sm font-bold">Apple</span>
            </button>
          </div>
        </motion.div>

        <p className="text-center font-body text-on-surface-variant text-sm">
          New to Velocity Blue? 
          <a className="text-primary font-bold hover:underline ml-1" href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
}
