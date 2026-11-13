import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar as CalendarIcon, Plus, Trash2, Clock } from 'lucide-react';

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [formData, setFormData] = useState({ subject: '', day: 'Monday', startTime: '', endTime: '' });

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/schedules');
      setSchedules(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/schedules', formData);
      setFormData({ subject: '', day: 'Monday', startTime: '', endTime: '' });
      fetchSchedules();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/schedules/${id}`);
      fetchSchedules();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Weekly Schedule Planner</h1>
        <p className="text-gray-600">Plan your study sessions for the week</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold mb-4 flex items-center"><Plus className="w-5 h-5 mr-2" /> Add Study Session</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input required type="text" name="subject" value={formData.subject} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="E.g., Calculus 101" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Day</label>
            <select name="day" value={formData.day} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
              {days.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <div className="flex items-center space-x-2">
              <input required type="time" name="startTime" value={formData.startTime} onChange={handleInputChange} className="w-full px-2 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm" />
              <span className="text-gray-400">-</span>
              <input required type="time" name="endTime" value={formData.endTime} onChange={handleInputChange} className="w-full px-2 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm" />
            </div>
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
              Add
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {days.map(day => {
          const daySchedules = schedules.filter(s => s.day === day).sort((a, b) => a.startTime.localeCompare(b.startTime));
          return (
            <div key={day} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-indigo-50 px-4 py-3 border-b border-indigo-100 flex justify-between items-center">
                <h3 className="font-semibold text-indigo-900">{day}</h3>
                <span className="text-xs font-medium bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full">{daySchedules.length}</span>
              </div>
              <div className="p-4 space-y-3 min-h-[150px]">
                {daySchedules.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-6">No sessions</p>
                ) : (
                  daySchedules.map(session => (
                    <div key={session._id} className="bg-gray-50 p-3 rounded-lg border border-gray-100 group relative">
                      <h4 className="font-medium text-gray-900 text-sm mb-1 pr-6">{session.subject}</h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {session.startTime} - {session.endTime}
                      </div>
                      <button
                        onClick={() => handleDelete(session._id)}
                        className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
