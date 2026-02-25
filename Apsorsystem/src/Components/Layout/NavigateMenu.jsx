import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Package, Upload, User } from 'lucide-react';
import Profile from '../Pages/Public/proflie/profile';

export default function NavigateMenu({ MenuOpen, toggleMenu }) {
  const cartItems = 3;
  const pendingOrders = 2;
  const [active, setActive] = useState("Home");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='lg:flex hidden items-center gap-6 text-black font-medium '>
      {/* Menu Items */}
      <div className={`flex items-center px-30 gap-10 text-black font-medium transition-all duration-300 ${MenuOpen ? 'block' : 'hidden'} lg:flex`}>
        <Link to="/" className={`hover:text-purple-500 transition-colors ${active === "Home" ? 'text-purple-500' : ''}`} onClick={() => setActive("Home")}>Home</Link>
        <Link to="/explore" className={`hover:text-purple-500 transition-colors ${active === "Explore" ? 'text-purple-500' : ''}`} onClick={() => setActive("Explore")}>Explore</Link>
        <Link to="/about" className={`hover:text-purple-500 transition-colors ${active === "About" ? 'text-purple-500' : ''}`} onClick={() => setActive("About")}>About</Link>
        <Link to="/contact" className={`hover:text-purple-500 transition-colors ${active === "Contact" ? 'text-purple-500' : ''}`} onClick={() => setActive("Contact")}>Contact</Link>
      </div>

      {/* Cart */}
      <div className="relative group">
        <button className="flex flex-col items-center gap-1 p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <div className="relative">
            <ShoppingCart className="size-5 text-gray-700" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 size-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cartItems}
              </span>
            )}
          </div>
          <span className="text-xs">Cart</span>
        </button>
        
        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="px-4 py-3 border-b">
            <p className="font-semibold text-gray-900">Your Cart</p>
            <p className="text-sm text-gray-500">{cartItems} items</p>
          </div>
          <div className="py-2">
            <button onClick={() => handleNavigation('/cart')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer text-left">
              <p className="text-sm font-medium">View Cart</p>
            </button>
            <button onClick={() => handleNavigation('/checkout')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer text-left">
              <p className="text-sm font-medium">Checkout</p>
            </button>
          </div>
        </div>
      </div>

      {/* Orders */}
      <div className="relative group">
        <button className="flex flex-col items-center gap-1 p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <div className="relative">
            <Package className="size-5 text-gray-700" />
            {pendingOrders > 0 && (
              <span className="absolute -top-2 -right-2 size-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {pendingOrders}
              </span>
            )}
          </div>
          <span className="text-xs">Orders</span>
        </button>
        
        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div className="px-4 py-3 border-b">
            <p className="font-semibold text-gray-900">Your Orders</p>
            <p className="text-sm text-gray-500">{pendingOrders} pending</p>
          </div>
          <div className="py-2">
            <button onClick={() => handleNavigation('/orders')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer text-left">
              <p className="text-sm font-medium">Track Orders</p>
            </button>
            <button onClick={() => handleNavigation('/order-history')} className="w-full px-4 py-3 hover:bg-gray-50 cursor-pointer text-left">
              <p className="text-sm font-medium">Order History</p>
            </button>
          </div>
        </div>
      </div>

      {/* Post Button */}
      <button onClick={() => handleNavigation('/post')} className="bg-linear-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group">
        <Upload className="size-4 group-hover:scale-110 transition-transform" />
        <span>Post</span>
      </button>

      {/* Profile */}
      <div className="relative group">
        <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <img 
            src="https://yt3.googleusercontent.com/rp1eL5jdrjYTMyK45N0dcHRHZ_vHgTm78cgOdb2_DL5t24JJ5YB2BDd7vHoIEpqUsrarHbT-fw=s900-c-k-c0x00ffffff-no-rj-v1" 
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-left text-sm">
            <p className="text-sm font-medium text-gray-900">Tep Piseth</p>
            <p className="text-xs text-gray-500">View Profile</p>
          </div>
        </button>

        <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <Profile setShowDropdown={setShowDropdown} />
        </div>
      </div>
    </div>
  );
}