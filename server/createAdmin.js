const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const dotenv = require('dotenv');

dotenv.config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    let admin = await User.findOne({ email: 'admin@studysmart.com' });
    if (admin) {
      console.log('Admin user already exists.');
      console.log('Email: admin@studysmart.com');
      console.log('Password: adminpassword123');
      process.exit(0);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('adminpassword123', salt);

    admin = new User({
      name: 'System Admin',
      email: 'admin@studysmart.com',
      password: hashedPassword,
      role: 'admin'
    });

    await admin.save();
    console.log('Successfully created Admin account!');
    console.log('Email: admin@studysmart.com');
    console.log('Password: adminpassword123');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createAdmin();
