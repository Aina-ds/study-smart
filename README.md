# StudySmart - Intelligent Study Planner

A full-stack web application built with React, Node.js, Express, and MongoDB. 

## Folder Structure

```
studysmart/
│
├── client/                     # Frontend React application (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── context/            # React Context for state management
│   │   │   └── AuthContext.jsx
│   │   ├── pages/              # Main application pages
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Schedule.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Tasks.jsx
│   │   ├── App.jsx             # Main routing component
│   │   ├── index.css           # Tailwind CSS
│   │   └── main.jsx
│   ├── package.json
│   ├── tailwind.config.js      # Tailwind configuration
│   └── vite.config.js          # Vite configuration
│
└── server/                     # Backend Node.js/Express application
    ├── controllers/            # Request handlers
    │   ├── authController.js
    │   ├── scheduleController.js
    │   └── taskController.js
    ├── middleware/             # Express middlewares
    │   └── auth.js             # JWT verification middleware
    ├── models/                 # Mongoose database models
    │   ├── Schedule.js
    │   ├── Task.js
    │   └── User.js
    ├── routes/                 # API endpoint definitions
    │   ├── authRoutes.js
    │   ├── scheduleRoutes.js
    │   └── taskRoutes.js
    ├── .env                    # Environment variables
    ├── package.json
    └── server.js               # Entry point for backend server
```

## Installation Steps

1. **Clone or Download the Repository**
2. **Setup Backend:**
   - Navigate to the server folder: `cd server`
   - Install dependencies: `npm install`
3. **Setup Frontend:**
   - Navigate to the client folder: `cd client`
   - Install dependencies: `npm install`

## Environment Variables

In the `server/` directory, there is a `.env` file with the following configurations:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/studysmart
JWT_SECRET=supersecretjwtkey_12345
```
*(Make sure you have MongoDB running locally, or replace `MONGODB_URI` with a MongoDB Atlas connection string).*

## Commands to Run the Application

**Run the Backend Server:**
1. Open a terminal.
2. Navigate to the `server` directory: `cd server`
3. Start the server: `node server.js` (or use `nodemon server.js` for development).
4. *The backend will run on `http://localhost:5000`.*

**Run the Frontend Application:**
1. Open a new terminal.
2. Navigate to the `client` directory: `cd client`
3. Start the Vite development server: `npm run dev`
4. *The frontend will run on `http://localhost:5173`.*

Open your browser and navigate to `http://localhost:5173` to use StudySmart!
