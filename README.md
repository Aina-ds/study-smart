 <div align="center">

# 📚 StudySmart
### Intelligent Study Planner

**Study Smarter. Stay Organized. Achieve More.**

A full-stack web application designed to help students organize their academic schedules, manage daily tasks, and stay on top of their learning goals.

<br/>

![React](https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## ✨ Overview

StudySmart is a full-stack academic productivity platform built to make student life more organized and manageable.

It combines a React-based frontend with a Node.js and Express backend, using MongoDB for data management.

The platform provides dedicated areas for managing study tasks, organizing schedules, accessing personal profiles, and handling user authentication.

Whether you're planning your weekly timetable or keeping track of assignments, StudySmart brings essential study management tools together in one place.

## 🚀 Key Features

| Feature | Description |
|---|---|
| 🔐 User Authentication | User registration, login, and protected access using JWT authentication. |
| 📊 Dashboard | A central space for accessing study-related information. |
| 📅 Study Scheduling | Organize and manage study schedules. |
| ✅ Task Management | Create and manage academic tasks. |
| 👤 User Profile | Access and manage personal profile information. |
| 🛡️ Admin Panel | Dedicated administrative interface. |
| 🎨 Responsive Interface | React-based frontend with Tailwind CSS styling. |

## 🛠️ Technology Stack

### Frontend

- **React.js** – Component-based user interface.
- **Vite** – Frontend development and build tooling.
- **Tailwind CSS** – Utility-first styling.
- **React Context API** – Application state management.

### Backend

- **Node.js** – JavaScript runtime.
- **Express.js** – Backend framework and API development.
- **MongoDB** – Database management.
- **Mongoose** – MongoDB object modeling.
- **JWT** – Authentication and authorization.

---

## 📁 Project Structure

```text
study-smart/
│
├── client/                      # React frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Schedule.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Tasks.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/                      # Node.js backend
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── scheduleController.js
│   │   └── taskController.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── Schedule.js
│   │   ├── Task.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── scheduleRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── createAdmin.js
│   ├── server.js
│   └── package.json
│
├── studysmart/                  # Additional HTML-based study pages
│   ├── css/
│   │   └── style.css
│   ├── pages/
│   │   ├── login.html
│   │   ├── profile.html
│   │   └── register.html
│   ├── admin.html
│   ├── dashboard.html
│   ├── index.html
│   ├── schedule.html
│   └── tasks.html
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

Follow these instructions to run StudySmart on your local machine.

### 1. Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- npm (included with Node.js)
- Git

### 2. Clone the Repository

```bash
git clone https://github.com/Aina-ds/study-smart.git
```

Navigate into the project:

```bash
cd study-smart
```

### 3. Configure the Backend

Navigate to the server directory:

```bash
cd server
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file inside the `server` directory.

Add your environment variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_secret
```

**Important:** Replace the example values with your own configuration. Never upload your actual `.env` file or secret keys to GitHub.

### 4. Start the Backend Server

From the `server` directory, run:

```bash
node server.js
```

The backend server should be available at:

`http://localhost:5000`

### 5. Configure the Frontend

Open a new terminal and navigate to the client directory:

```bash
cd client
```

Install frontend dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend should be available at:

`http://localhost:5173`

### 6. Access StudySmart

Open your browser and visit:

**http://localhost:5173**

Make sure the backend and MongoDB are running before using features that require server connectivity.

---

## 🔒 Security & Environment Configuration

StudySmart uses environment variables to manage sensitive configuration.

For security:

- Keep database connection strings private.
- Never commit `.env` files.
- Use a strong, randomly generated JWT secret.
- Protect authentication credentials.
- Configure database access permissions appropriately.

---

## 🎯 Project Objectives

The main objectives of StudySmart are to:

- Simplify academic planning and organization.
- Help students manage study-related responsibilities.
- Provide a centralized platform for schedules and tasks.
- Make essential study management tools accessible through a web interface.
- Demonstrate full-stack web development using modern JavaScript technologies.

---

## 🔮 Future Improvements

Potential enhancements for future development include:

- 📈 Advanced academic progress analytics.
- 🔔 Study reminders and notifications.
- 📆 Calendar integration.
- 🎯 Personalized study goals.
- 📱 Enhanced mobile experience.
- 🤖 AI-powered study recommendations.

---

## 👩‍💻 Developer

**Developed by Aina**

GitHub: [@Aina-ds](https://github.com/Aina-ds)

---

<div align="center">

### 📚 Plan Better. Learn Better. Achieve More.

**StudySmart – Making Academic Organization Simpler.**

</div>