import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center shadow-sm">
      <div className="font-semibold text-lg text-indigo-600 sm:hidden">StudySmart</div>
      <div className="hidden sm:block"></div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-700">
          <User className="w-5 h-5 mr-2" />
          <span className="font-medium">{user.name}</span>
        </div>
        <button 
          onClick={logout}
          className="flex items-center text-red-500 hover:text-red-700 transition-colors"
        >
          <LogOut className="w-5 h-5 mr-1" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
