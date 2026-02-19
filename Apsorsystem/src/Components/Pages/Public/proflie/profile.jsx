import React from 'react'
import { User, ShoppingBag, FileText, Heart, Settings, HelpCircle, LogOut } from 'lucide-react'

export default function Profile() {
  return (
    <div className="absolute top-full -right-20 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 z-50">
      {/* Menu Items */}
      <div className="py-2">
        <a href="#" className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
          <User className="size-4 text-gray-700" />
          <p className="text-sm font-medium text-gray-700">My Profile</p>
        </a>
        <a href="#" className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
          <ShoppingBag className="size-4 text-gray-700" />
          <p className="text-sm font-medium text-gray-700">Purchases</p>
        </a>
        <a href="#" className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
          <FileText className="size-4 text-gray-700" />
          <p className="text-sm font-medium text-gray-700">My Listings</p>
        </a>
        <a href="#" className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors">
          <Heart className="size-4 text-gray-700" />
          <p className="text-sm font-medium text-gray-700">Saved Items</p>
        </a>
      </div>

      {/* Bottom Menu Items */}
      <div className="border-t pt-2">
        <a href="Home" className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-700 block transition-colors">
          Settings
        </a>
        <a href="Home" className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-700 block transition-colors">
          Help Center
        </a>
        <a href="Home" className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-sm font-medium text-red-600 block transition-colors">
          Logout
        </a>
      </div>
    </div>
  )
}
