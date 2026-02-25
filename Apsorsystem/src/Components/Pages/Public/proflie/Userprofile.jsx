import { useState, useRef } from 'react';
import Footer from '../Footer/footer.jsx';

const Userprofile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  // Refs for hidden file inputs
  const coverInputRef = useRef(null);
  const profileInputRef = useRef(null);

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'products', label: 'My Products' },
    { id: 'orders', label: 'Order' },
    { id: 'likes', label: 'Likes' }
  ];

  // Handle cover image upload
  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setCoverImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle profile image upload
  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto pt-30 bg-white rounded-xl shadow-md overflow-hidden">
        {/* Cover Image - Click to upload */}
        <div
          className="relative h-32 bg-Linear-to-r from-blue-400 to-indigo-500 cursor-pointer group"
          onClick={() => coverInputRef.current.click()}
          style={coverImage ? { backgroundImage: `url(${coverImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        >
          {!coverImage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-sm font-medium">Change Cover</span>
            </div>
          )}
          <input
            type="file"
            ref={coverInputRef}
            onChange={handleCoverChange}
            accept="image/*"
            className="hidden"
          />
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-4">
          <div className="flex items-start -mt-12">
            {/* Avatar - Click to upload */}
            <div
              className="relative w-24 h-24 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center text-2xl font-bold text-gray-700 overflow-hidden cursor-pointer group"
              onClick={() => profileInputRef.current.click()}
            >
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span>SC</span>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs">Change</span>
              </div>
              <input
                type="file"
                ref={profileInputRef}
                onChange={handleProfileChange}
                accept="image/*"
                className="hidden"
              />
            </div>
            <div className="ml-4 mt-8 pt-5">
              <h1 className="text-2xl font-bold">Sovanna chesdara</h1>
              <p className="text-gray-500">@chesdara</p>
            </div>
          </div>

          {/* Location & Join Date */}
          <div className="mt-2 flex gap-4 text-gray-600 text-sm">
            <span>📍 Phnom Penh</span>
            <span>📅 Joined February 2026</span>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-b">
            <nav className="flex space-x-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === 'about' && (
              <div className="text-gray-700">
                <p>This is the about section. You can add a short bio, contact info, or anything else. This is the about section. You can add a short bio, contact info, or anything else.This is the about section. You can add a short bio, contact info, or anything else.This is the about section. You can add a short bio, contact info, or anything else.This is the about section. You can add a short bio, contact info, or anything else.This is the about section. You can add a short bio, contact info, or anything else.This is the about section. You can add a short bio, contact info, or anything else.This is the about section. You can add a short bio, contact info, or anything else.This is the about section. You can add a short bio, contact info, or anything else.This is the about section. You can add a short bio, contact info, or anything else.This is the about section. You can add a short bio, contact info, or anything else.This is the about section. You can add a short bio, contact info, or anything else.</p>
              </div>
            )}
            {activeTab === 'products' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">Product 1</div>
                <div className="border rounded-lg p-4">Product 2</div>
              </div>
            )}
            {activeTab === 'orders' && (
              <div className="space-y-2">
                <div className="border p-3 rounded">Order #123</div>
                <div className="border p-3 rounded">Order #456</div>
              </div>
            )}
            {activeTab === 'likes' && (
              <div className="text-gray-500">Liked items will appear here.</div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Userprofile;