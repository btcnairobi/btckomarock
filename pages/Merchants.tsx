import React, { useState } from 'react';
import { MapPin, Search, Phone, Zap } from 'lucide-react';
import { Merchant } from '../types';

const MOCK_MERCHANTS: Merchant[] = [
  {
    id: '1',
    name: "Mama Mboga",
    category: "Food",
    description: "Fresh vegetables. 5% discount.",
    image: "https://picsum.photos/400/300?random=1",
    acceptsLightning: true,
    location: "Sector 1"
  },
  {
    id: '2',
    name: "Koma Cyber",
    category: "Tech",
    description: "Printing & Internet services.",
    image: "https://picsum.photos/400/300?random=2",
    acceptsLightning: true,
    location: "Sector 3"
  },
  {
    id: '3',
    name: "Stone Hardware",
    category: "Build",
    description: "Cement, paint, and tools.",
    image: "https://picsum.photos/400/300?random=3",
    acceptsLightning: false,
    location: "Sector 2"
  },
  {
    id: '4',
    name: "Bitcoin Barber",
    category: "Look",
    description: "Fade & Shave. Talk crypto.",
    image: "https://picsum.photos/400/300?random=4",
    acceptsLightning: true,
    location: "Sector 1"
  }
];

const MerchantItem: React.FC<{ merchant: Merchant }> = ({ merchant }) => (
  <div className="rock-card p-0 flex flex-row overflow-hidden h-32">
    <div className="w-32 h-full relative border-r-2 border-stone-900">
        <img src={merchant.image} className="w-full h-full object-cover" />
        {merchant.acceptsLightning && (
            <div className="absolute top-1 left-1 bg-bitcoin-orange text-white p-1 rounded-full border border-stone-900 z-10">
                <Zap size={10} fill="currentColor" />
            </div>
        )}
    </div>
    <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
            <div className="flex justify-between items-start">
                <h3 className="font-black text-lg leading-none mb-1">{merchant.name}</h3>
            </div>
            <div className="flex items-center text-stone-500 text-xs font-bold uppercase mb-1">
                <MapPin size={10} className="mr-1" />
                {merchant.location}
            </div>
            <p className="text-stone-600 text-xs line-clamp-1">{merchant.description}</p>
        </div>
        
        <div className="flex gap-2 mt-2">
            <button className="flex-1 bg-stone-100 border border-stone-900 hover:bg-stone-200 text-stone-900 text-xs font-bold py-1.5 rounded transition-colors">
                Call
            </button>
            <button className="flex-1 bg-bitcoin-orange border border-stone-900 text-white hover:opacity-90 text-xs font-bold py-1.5 rounded transition-colors">
                Pay
            </button>
        </div>
    </div>
  </div>
);

const MerchantsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = MOCK_MERCHANTS.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
       
        <div className="pt-2">
            <h1 className="text-4xl font-black uppercase mb-4">Shops</h1>
            
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-white border-2 border-stone-900 rounded-xl pl-12 pr-4 py-3 font-bold focus:ring-4 focus:ring-stone-200 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 h-6 w-6 text-stone-900" />
            </div>
        </div>

        <div className="flex flex-col gap-4 pb-20">
          {filtered.map(merchant => (
            <MerchantItem key={merchant.id} merchant={merchant} />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-10 opacity-50 font-bold">No shops found.</div>
          )}
        </div>
    </div>
  );
};

export default MerchantsPage;