import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Store, Hexagon } from 'lucide-react';
import HomePage from './pages/Home';
import EducationPage from './pages/Education';
import MerchantsPage from './pages/Merchants';

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className="flex flex-col items-center justify-center w-full h-full relative group">
      <div className={`
        p-2 rounded-xl transition-all duration-200 border-2
        ${isActive 
          ? 'bg-bitcoin-orange text-white border-stone-900 shadow-rock-sm' 
          : 'bg-white text-stone-900 border-transparent hover:border-stone-200'}
      `}>
        {icon}
      </div>
      <span className={`text-[10px] mt-1 font-bold uppercase tracking-wide ${isActive ? 'text-stone-900' : 'text-stone-500'}`}>
        {label}
      </span>
    </Link>
  );
};

const TopBar: React.FC = () => (
  <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b-2 border-stone-900 px-4 py-3 flex items-center justify-between safe-area-top">
    <div className="flex items-center gap-2">
      <div className="bg-white p-1.5 rounded-lg border-2 border-stone-900 shadow-rock-sm">
        <Hexagon className="h-6 w-6 text-bitcoin-orange fill-bitcoin-orange" strokeWidth={2} />
      </div>
      <span className="font-black text-xl tracking-tight text-stone-900">
        Bitcoin Komarock
      </span>
    </div>
    <div className="flex items-center gap-3">
      <div className="bg-white border-2 border-stone-900 rounded-full px-3 py-1 flex items-center gap-2 shadow-rock-sm">
        <div className="w-2 h-2 rounded-full bg-bitcoin-orange animate-pulse"></div>
        <span className="text-xs font-black text-stone-900">842,910</span>
      </div>
    </div>
  </header>
);

const BottomNav: React.FC = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-stone-900 pb-safe z-50 md:hidden">
    <div className="flex justify-around items-center h-20 px-6 pb-2">
      <NavItem to="/" icon={<Home size={24} strokeWidth={2.5} />} label="Home" />
      <NavItem to="/education" icon={<BookOpen size={24} strokeWidth={2.5} />} label="Learn" />
      <NavItem to="/merchants" icon={<Store size={24} strokeWidth={2.5} />} label="Shop" />
    </div>
  </nav>
);

const Sidebar: React.FC = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    const linkClass = (path: string) => `
        flex items-center space-x-3 px-4 py-4 rounded-xl transition-all duration-200 font-bold border-2
        ${isActive(path) 
            ? 'bg-bitcoin-orange text-white border-stone-900 shadow-rock' 
            : 'bg-white text-stone-900 border-transparent hover:border-stone-200'}
    `;

    return (
        <aside className="hidden md:flex flex-col w-72 fixed h-full bg-stone-50 border-r-2 border-stone-900 p-6">
             <div className="flex items-center gap-2 mb-10">
                <div className="bg-white p-2 rounded-xl border-2 border-stone-900 shadow-rock">
                    <Hexagon className="h-8 w-8 text-bitcoin-orange fill-bitcoin-orange" />
                </div>
                <span className="font-black text-2xl">
                    Bitcoin Komarock
                </span>
            </div>
            
            <nav className="space-y-4 flex-1">
                <Link to="/" className={linkClass('/')}><Home size={24} /> <span>HOME</span></Link>
                <Link to="/education" className={linkClass('/education')}><BookOpen size={24} /> <span>LEARN</span></Link>
                <Link to="/merchants" className={linkClass('/merchants')}><Store size={24} /> <span>SHOP</span></Link>
            </nav>

            <div className="rock-card p-5">
                <p className="text-xs font-bold uppercase mb-1 text-stone-500">Block Height</p>
                <p className="text-3xl font-black">842,910</p>
            </div>
        </aside>
    )
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex min-h-screen bg-stone-50 text-stone-900 font-sans">
        <Sidebar />
        <div className="flex-1 md:ml-72 flex flex-col min-h-screen relative pb-24 md:pb-0">
          <TopBar />
          <main className="flex-grow p-4 md:p-8 max-w-6xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/merchants" element={<MerchantsPage />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;