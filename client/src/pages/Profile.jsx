import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { User, Mail, Phone, Clock, Flame, Shield, Save, X } from 'lucide-react';

const Profile = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: user?.name || '', phone: user?.phone || '' });

  if (!user) return null;

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData.name, formData.phone);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-600">Manage your account information and preferences</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-indigo-600 h-32 relative">
          <div className="absolute -bottom-12 left-8 p-1 bg-white rounded-full">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center border-4 border-white">
              <User className="w-12 h-12 text-indigo-500" />
            </div>
          </div>
        </div>
        
        <div className="pt-16 pb-8 px-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              {isEditing ? (
                <input 
                  type="text" 
                  name="name"
                  value={formData.name} 
                  onChange={handleInputChange}
                  className="text-2xl font-bold text-gray-900 border-b-2 border-indigo-500 focus:outline-none bg-transparent"
                />
              ) : (
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              )}
              <p className="text-gray-500 flex items-center mt-1">
                <Shield className="w-4 h-4 mr-1" />
                {user.role === 'admin' ? 'Administrator' : 'Student'}
              </p>
            </div>
            
            {isEditing ? (
              <div className="flex space-x-2">
                <button onClick={() => { setIsEditing(false); setFormData({ name: user.name, phone: user.phone || '' }); }} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-600 transition-colors flex items-center">
                  <X className="w-4 h-4 mr-1" /> Cancel
                </button>
                <button onClick={handleSubmit} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center shadow-sm">
                  <Save className="w-4 h-4 mr-1" /> Save
                </button>
              </div>
            ) : (
              <button onClick={() => setIsEditing(true)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Edit Profile
              </button>
            )}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 border-b pb-2">Contact Information</h3>
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3 text-gray-400" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3 text-gray-400" />
                {isEditing ? (
                  <input 
                    type="text" 
                    name="phone"
                    value={formData.phone} 
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="border-b-2 border-indigo-500 focus:outline-none bg-transparent w-full"
                  />
                ) : (
                  <span>{user.phone || 'Not provided'}</span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 border-b pb-2">Study Statistics</h3>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Total Study Hours</span>
                </div>
                <span className="font-bold text-gray-900">{user.studyHours || 0}</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="flex items-center text-gray-600">
                  <Flame className="w-5 h-5 mr-2 text-orange-500" />
                  <span>Current Streak</span>
                </div>
                <span className="font-bold text-gray-900">{user.streak || 0} days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
