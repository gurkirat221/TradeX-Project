# 📈 TradeX

TradeX is a **full-stack stock trading and portfolio management web application** inspired by modern online trading platforms. It provides users with an interactive interface to explore the platform, manage their account, view holdings and positions, track orders, and analyze portfolio information through a dedicated dashboard.

The project follows a separated architecture consisting of a **React frontend, Node.js/Express backend, and React-based trading dashboard**.

---

## 🌐 Live Demo

🚀 **Live Website:**  
https://tradexapp.netlify.app/

> The frontend is deployed on Netlify. Backend services and the dashboard work together to provide the complete TradeX experience.

---

## ✨ Features

- 📈 Modern stock trading platform interface
- 👤 User registration and login
- 🔐 JWT-based authentication
- 🔒 Password encryption using bcrypt
- 📊 Dedicated trading dashboard
- 💼 Portfolio and holdings interface
- 📋 Orders management
- 📉 Positions tracking
- 📊 Portfolio visualization using charts
- 🔄 Frontend-backend communication using Axios
- 🗄️ MongoDB-based data storage
- 🧭 Client-side routing using React Router
- 📱 Responsive user interface
- ⚡ Fast development and builds using Vite
- 🎨 Material UI-based dashboard components

---

# 🏗️ Project Architecture

TradeX consists of three major components:

```text
TradeX
│
├── frontend/
│   │
│   ├── React.js
│   ├── Vite
│   ├── React Router
│   └── Axios
│
├── backend/
│   │
│   ├── Node.js
│   ├── Express.js
│   ├── MongoDB
│   ├── Mongoose
│   ├── JWT
│   └── Authentication
│
└── dashboard/
    │
    ├── React.js
    ├── Vite
    ├── Material UI
    ├── Chart.js
    └── Axios
```

---

# 🛠️ Tech Stack

## 💻 Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Axios

## ⚙️ Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Passport.js
- Passport Local Mongoose
- CORS
- Dotenv
- Body Parser

## 📊 Dashboard

- React.js
- Vite
- Material UI (MUI)
- MUI Icons
- Emotion React
- Emotion Styled
- Chart.js
- React Chart.js 2
- React Router DOM
- Axios

## ☁️ Deployment

- Netlify – Frontend
- MongoDB Atlas – Cloud Database

---

# 📁 Project Structure

```text
TradeX/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── dashboard/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── package.json
    ├── vite.config.js
    └── index.html
```

> The exact folder structure may vary depending on the current project implementation.

---

# 💻 Frontend

The TradeX frontend provides the main user-facing interface of the application.

It is built using **React.js and Vite** for a fast and responsive development experience.

The frontend uses:

```text
React
   ↓
React Router
   ↓
Axios
   ↓
TradeX Backend API
```

Axios is used to communicate with the backend APIs, while React Router manages navigation between different pages.

---

# 📊 Trading Dashboard

TradeX contains a separate React-based dashboard designed to provide users with trading and portfolio-related information.

The dashboard uses **Material UI** for interface components and **Chart.js** for data visualization.

Dashboard technologies include:

```text
React.js
Material UI
Chart.js
React Chart.js 2
Axios
React Router
Vite
```

The dashboard can be used to display information such as:

- Holdings
- Positions
- Orders
- Portfolio data
- Investment information
- Charts and visual analytics

---

# ⚙️ Backend

The backend is built using **Node.js and Express.js**.

It is responsible for:

- Handling API requests
- User authentication
- Authorization
- Database communication
- Managing application data
- Connecting the frontend and dashboard with MongoDB

The backend communicates with MongoDB using **Mongoose**.

---

# 🔐 Authentication & Security

TradeX includes authentication functionality using technologies such as:

- JSON Web Tokens (JWT)
- bcryptjs
- Passport.js
- Passport Local Mongoose

Passwords can be securely hashed before being stored in the database.

JWT can be used to authenticate users when communicating with protected backend routes.

Environment variables are used to keep sensitive information outside the source code.

---

# 🗄️ Database

TradeX uses **MongoDB** for storing application data.

**MongoDB Atlas** can be used as the cloud-hosted database for the deployed application.

Mongoose provides object modelling and schema-based interaction between Node.js and MongoDB.

The database can store information related to:

```text
Users
  │
  ├── Account information
  └── Authentication data

Trading Data
  │
  ├── Holdings
  ├── Positions
  └── Orders

Portfolio
  │
  └── Investment information
```

---

# 📊 Data Visualization

The TradeX dashboard uses:

- Chart.js
- React Chart.js 2

These libraries enable portfolio and investment data to be represented visually using interactive charts.

This makes financial information easier to understand and analyze.

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project:

```bash
cd TradeX
```

---

# 🚀 Run the Frontend

Navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The terminal will display the local frontend URL, typically:

```text
http://localhost:5173
```

---

# ⚙️ Run the Backend

Open another terminal and navigate to:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend directory.

Example:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8080
```

> Use the exact environment variable names expected by your backend code.

Start the backend:

```bash
npm start
```

For development with Nodemon:

```bash
npm run dev
```

---

# 📊 Run the Dashboard

Open another terminal and navigate to:

```bash
cd dashboard
```

Install dependencies:

```bash
npm install
```

Run the dashboard:

```bash
npm run dev
```

Vite will provide a local URL for the dashboard.

---

# 🔄 Application Flow

```text
                User
                  │
                  ▼
          TradeX Frontend
          React + Vite
                  │
                  │ Axios / HTTP
                  ▼
          Node.js Backend
        Express REST APIs
                  │
                  ▼
             MongoDB
                  │
                  ▼
            User Data
         Trading Information

                  +
                  
         TradeX Dashboard
                  │
        Material UI + Charts
                  │
                  ▼
      Portfolio Visualization
```

---

# 🔑 Environment Variables

Sensitive credentials should be stored using environment variables instead of directly inside the source code.

Example backend `.env`:

```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8080
```

If the frontend uses an environment variable for its API URL, it can follow Vite's naming convention:

```env
VITE_API_URL=your_backend_url
```

Then access it using:

```javascript
import.meta.env.VITE_API_URL
```

Never commit `.env` files containing credentials to GitHub.

Add them to `.gitignore`:

```text
node_modules/
.env
.env.local
dist/
```

---

# 📦 Production Build

## Frontend

Create a production build using:

```bash
cd frontend
npm run build
```

Vite will generate:

```text
dist/
```

## Dashboard

Create the dashboard production build using:

```bash
cd dashboard
npm run build
```

This will also generate a production-ready `dist` directory.

---

# 🚀 Deployment

## Frontend

The TradeX frontend is deployed on **Netlify**.

🌐 **Live Website:**  
https://tradexapp.netlify.app/

For a Vite application, the typical Netlify configuration is:

```text
Build Command:
npm run build

Publish Directory:
dist
```

If `frontend` is inside the main repository, configure the appropriate base directory in Netlify.

## Backend

The Node.js backend should be deployed on a platform capable of running an Express server.

Production start command:

```bash
npm start
```

which executes:

```bash
node index.js
```

## Dashboard

The dashboard can also be built using:

```bash
npm run build
```

and deployed as a Vite application.

---

# 🔮 Future Improvements

Future enhancements for TradeX could include:

- 📡 Integration with real-time stock market APIs
- 💹 Live stock prices
- 🔎 Stock search functionality
- 🛒 Buy and sell order simulation
- 💰 Virtual trading balance
- 📊 Advanced portfolio analytics
- 📈 Profit and loss tracking
- ❤️ Stock watchlists
- 🔔 Price alerts and notifications
- 📃 Transaction history
- 🕯️ Candlestick charts
- 📱 Improved mobile responsiveness
- 🔐 Enhanced authentication security
- 👤 User profile management

---

# 👨‍💻 Author

**Gurkirat Singh**

Software Developer | Full Stack Web Developer

---

# 📄 License

This project was developed for **educational and learning purposes**.

---

# ⭐ Support

If you find TradeX useful or interesting, consider giving the repository a ⭐ on GitHub.

🚀 **Live Demo:**  
https://tradexapp.netlify.app/