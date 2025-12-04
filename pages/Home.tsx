import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Hammer, ShoppingBag, BookOpen } from 'lucide-react';

const ActionCard: React.FC<{ 
  to: string; 
  title: string; 
  desc: string; 
  icon: React.ReactNode; 
}> = ({ to, title, desc, icon }) => (
  <Link to={to} className="rock-card flex flex-col items-center text-center p-6 h-full group">
    <div className="w-16 h-16 rounded-full bg-stone-100 border-2 border-stone-900 flex items-center justify-center mb-4 group-hover:bg-bitcoin-orange group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-black uppercase mb-2">{title}</h3>
    <p className="text-sm font-medium text-stone-600 line-clamp-3">{desc}</p>
    <div className="mt-auto pt-4">
       <span className="text-xs font-bold uppercase tracking-wider text-bitcoin-orange group-hover:text-stone-900 flex items-center gap-1">
         Go <ArrowRight size={14} />
       </span>
    </div>
  </Link>
);

const ProjectCard: React.FC<{ 
  title: string; 
  percent: number; 
  sats: string;
}> = ({ title, percent, sats }) => (
  <div className="rock-card p-4 flex flex-col">
    <div className="flex justify-between items-start mb-2">
      <span className="bg-bitcoin-orange text-white text-[10px] font-bold px-2 py-0.5 rounded border border-stone-900">ACTIVE</span>
      <span className="font-mono text-xs font-bold">{sats} sats</span>
    </div>
    <h3 className="text-lg font-black leading-tight mb-2">{title}</h3>
    <div className="w-full bg-stone-200 border border-stone-900 rounded-full h-3 mt-auto">
      <div className="bg-stone-900 h-full rounded-full" style={{ width: `${percent}%` }} />
    </div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Intro Section */}
      <div className="text-center md:text-left py-4">
        <h1 className="text-4xl md:text-6xl font-black text-stone-900 uppercase tracking-tighter leading-none mb-2">
          Rock<br/><span className="text-bitcoin-orange">Solid.</span>
        </h1>
        <p className="text-stone-600 font-bold text-lg max-w-md">
          The Bitcoin Economy of Komarock. Start your journey today.
        </p>
      </div>

      {/* Main Grid - Limit to max 6-9 cards for clarity */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        
        {/* Card 1: Learn */}
        <ActionCard 
          to="/education" 
          title="Learn" 
          desc="Master the basics of money, wallets, and nodes."
          icon={<BookOpen size={32} strokeWidth={2.5} />} 
        />

        {/* Card 2: Shop */}
        <ActionCard 
          to="/merchants" 
          title="Shop" 
          desc="Find local shops accepting Bitcoin payments."
          icon={<ShoppingBag size={32} strokeWidth={2.5} />} 
        />

        {/* Card 3: Stats */}
        <div className="rock-card p-6 flex flex-col justify-center items-center text-center bg-bitcoin-orange text-white">
           <Users size={40} className="mb-2" />
           <h3 className="text-4xl font-black">1,204</h3>
           <span className="text-xs font-bold uppercase tracking-widest text-stone-900">Members</span>
        </div>

        {/* Card 4: Build (Projects) */}
        <div className="rock-card p-0 overflow-hidden flex flex-col justify-between col-span-2 md:col-span-1 md:row-span-1 bg-white">
           <div className="p-4 bg-stone-900 text-white">
              <h3 className="font-black text-xl uppercase flex items-center gap-2">
                <Hammer size={20} /> Build
              </h3>
           </div>
           <div className="p-4 space-y-3">
              <ProjectCard title="Market WiFi" percent={75} sats="1.4M" />
              <ProjectCard title="Road Fix" percent={20} sats="850k" />
           </div>
        </div>

         {/* Card 5: Wallet (Placeholder link) */}
         <Link to="/education" className="rock-card p-6 flex flex-col justify-center items-center text-center hover:bg-stone-100 col-span-2 md:col-span-1">
           <Zap size={40} className="mb-2 text-stone-900" fill="#F7931A" />
           <h3 className="text-xl font-black uppercase">Get Wallet</h3>
           <p className="text-xs font-bold text-stone-500 mt-1">Setup in 2 mins</p>
        </Link>

      </div>

    </div>
  );
};

export default HomePage;