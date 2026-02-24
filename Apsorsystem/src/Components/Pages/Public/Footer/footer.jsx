import { Facebook, X , Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

// REMOVE Input and Button imports completely 
// because your project DOES NOT have these files

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h3 className="text-white text-2xl font-bold mb-3 tracking-wide">Apsor</h3>
            <p className="text-sm text-gray-400">
              Marketplace for modern services & trusted providers.
            </p>

            <div className="flex items-center space-x-4 mt-4">
              <Link to="#" className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="#" className="p-2 rounded-full bg-white/10 hover:bg-black transition">
                <X className="w-5 h-5 text-white" />
              </Link>
              <Link to="#" className="p-2 rounded-full bg-white/10 hover:bg-linear-to-r from-purple-600 to-pink-500 transition">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="#" className="p-2 rounded-full bg-white/10 hover:bg-red-500 transition">
                <Youtube className="w-5 h-5 " />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white transition">Features</Link></li>
              <li><Link to="#" className="hover:text-white transition">Pricing</Link></li>
              <li><Link to="#" className="hover:text-white transition">Integrations</Link></li>
              <li><Link to="#" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="#" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="#" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to receive updates & offers.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-md w-full placeholder:text-gray-500"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md">
                <Mail className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2026 Apsor. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition">Feedback</Link>
            <Link to="#" className="hover:text-white transition">Account Deletion</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}