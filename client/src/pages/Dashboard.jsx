import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Clock, Flame, BookOpen, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({
    totalHours: user?.studyHours || 0,
    streak: user?.streak || 0,
    completedTasks: 0,
    totalTasks: 0
  });

  const chartData = [
    { name: 'Mon', hours: 2 },
    { name: 'Tue', hours: 3 },
    { name: 'Wed', hours: 1.5 },
    { name: 'Thu', hours: 4 },
    { name: 'Fri', hours: 2.5 },
    { name: 'Sat', hours: 5 },
    { name: 'Sun', hours: 3 },
  ]; // Dummy data for chart

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tasks');
        setTasks(res.data);
        const completed = res.data.filter(t => t.completed).length;
        setStats(prev => ({
          ...prev,
          completedTasks: completed,
          totalTasks: res.data.length
        }));
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  const StatCard = ({ title, value, icon: Icon, colorClass }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
      <div className={`p-4 rounded-lg ${colorClass} mr-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {user?.name}! Here's your study overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Study Hours" value={stats.totalHours} icon={Clock} colorClass="bg-blue-500" />
        <StatCard title="Current Streak" value={`${stats.streak} Days`} icon={Flame} colorClass="bg-orange-500" />
        <StatCard title="Tasks Completed" value={`${stats.completedTasks}/${stats.totalTasks}`} icon={CheckCircle} colorClass="bg-green-500" />
        <StatCard title="Subjects Active" value="4" icon={BookOpen} colorClass="bg-indigo-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Study Hours This Week</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} />
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                />
                <Line type="monotone" dataKey="hours" stroke="#6366F1" strokeWidth={3} dot={{r: 4, fill: '#6366F1', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Tasks Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Tasks</h3>
          <div className="space-y-4">
            {tasks.filter(t => !t.completed).slice(0, 5).map(task => (
              <div key={task._id} className="flex items-start p-3 bg-gray-50 rounded-lg">
                <div className={`w-2 h-2 mt-2 rounded-full mr-3 ${task.priority === 'High' ? 'bg-red-500' : task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                <div>
                  <p className="font-medium text-sm text-gray-900">{task.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{task.category || 'General'}</p>
                </div>
              </div>
            ))}
            {tasks.filter(t => !t.completed).length === 0 && (
              <p className="text-sm text-gray-500 text-center py-4">No pending tasks! Great job.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
