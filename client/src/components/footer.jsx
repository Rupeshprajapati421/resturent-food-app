import React from "react";
import { FaFacebook, FaInstagram, FaTwitter ,  FaPhone, FaEnvelope ,
  FaMapMarkerAlt} from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

        
        <div>
          <h2 className="text-2xl font-bold text-white">Foodie</h2>
          <p className="mt-3 text-sm">
            Fresh food delivered fast — anytime, anywhere.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/orders" className="hover:text-yellow-400">Orders</a></li>
            <li><a href="/login" className="hover:text-yellow-400">Login</a></li>
            <li><a href="/register" className="hover:text-yellow-400">Signup</a></li>
          </ul>
        </div>

        
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-white mb-3 ">Contact</h3>

          <p className="text-sm flex gap-2">
             <FaMapMarkerAlt className="text-red-500 text-xl" />
             New Delhi, India</p>
              
          <p className="text-sm flex gap-2"><FaPhone className="text-blue-400" /> 
           +91 9876543210</p>

          <p className="text-sm flex gap-2"><FaEnvelope className="text-yellow-400" /> 
           support@foodie.com</p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Subscribe</h3>
          <p className="text-sm mb-3">
            Get special offers and updates straight to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-r-md hover:bg-yellow-400">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">© 2026 Foodie — All Rights Reserved.</p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="facebook" className="hover:text-yellow-400 text-sm">
                      <FaFacebook className="ml-5" / > Facebook</a>
            <a href="instagram" className="hover:text-yellow-400 text-sm">
                       <FaInstagram  className="ml-5"/>Instagram</a>
            <a href="twitter" className="hover:text-yellow-400 text-sm">
                   <FaTwitter className="ml-3" />Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
