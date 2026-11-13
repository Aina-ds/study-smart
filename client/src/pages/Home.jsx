import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckSquare, Calendar, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-3xl space-y-8">
        <BookOpen className="mx-auto h-20 w-20 text-indigo-600 mb-8" />
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Welcome to <span className="text-indigo-600">StudySmart</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The intelligent study planner and productivity tracking system designed to help you achieve your academic goals.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link to="/signup" className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
            Get Started
          </Link>
          <Link to="/login" className="px-8 py-3 rounded-lg bg-white text-indigo-600 font-medium border border-indigo-200 hover:bg-indigo-50 transition-colors">
            Login
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <Link to="/tasks" className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer block">
            <CheckSquare className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Task Management</h3>
            <p className="text-gray-600 text-sm">Organize assignments, projects, and readings with ease.</p>
          </Link>
          <Link to="/schedule" className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer block">
            <Calendar className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Schedule Planner</h3>
            <p className="text-gray-600 text-sm">Create a balanced weekly timetable for all your subjects.</p>
          </Link>
          <Link to="/dashboard" className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all cursor-pointer block">
            <TrendingUp className="h-8 w-8 text-indigo-500 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Productivity Tracking</h3>
            <p className="text-gray-600 text-sm">Monitor your study hours and maintain your learning streak.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
