import React from 'react'
import { useNavigate } from 'react-router-dom';
import { User, ShoppingBag, FileText, Heart } from 'lucide-react'

export default function Profile({ setShowDropdown }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setShowDropdown(false);
  };

  return (
    <div className="absolute top-full -right-20 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 z-50">
      <div className="py-2">
        <button onClick={() => handleNavigation('/userprofile')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
          <User className="size-4 text-gray-700" />
          <p className="text-sm font-medium text-gray-700">My Profile</p>
        </button>
        <button onClick={() => handleNavigation('/purchases')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
          <ShoppingBag className="size-4 text-gray-700" />
          <p className="text-sm font-medium text-gray-700">Purchases</p>
        </button>
        <button onClick={() => handleNavigation('/listings')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
          <FileText className="size-4 text-gray-700" />
          <p className="text-sm font-medium text-gray-700">My Listings</p>
        </button>
        <button onClick={() => handleNavigation('/saved')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
          <Heart className="size-4 text-gray-700" />
          <p className="text-sm font-medium text-gray-700">Saved Items</p>
        </button>
      </div>

      <div className="border-t pt-2">
        <button onClick={() => handleNavigation('/settings')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-700 transition-colors text-left">
          Settings
        </button>
        <button onClick={() => handleNavigation('/help')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-700 transition-colors text-left">
          Help Center
        </button>
        <button onClick={() => handleNavigation('/')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm font-medium text-red-600 transition-colors text-left">
          Logout
        </button>
      </div>
    </div>
  )
}
