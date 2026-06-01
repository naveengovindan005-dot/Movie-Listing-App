# Movie-Listing-App
# 🎬 Movie Listing Application

A full-stack web application that displays a collection of movies using a React frontend and an Express.js backend. The application retrieves movie data from a JSON dataset and presents it in a user-friendly interface.

## 📌 Project Overview

This project demonstrates the implementation of a simple movie catalog system where users can browse movie information served through a REST API.

The application is divided into two parts:

- **Frontend:** React.js
- **Backend:** Node.js + Express.js

## ✨ Features

- Display movie listings
- Fetch movie data from a backend API
- Responsive user interface
- JSON-based movie dataset
- Separation of frontend and backend architecture

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Frontend UI |
| Node.js | Runtime Environment |
| Express.js | Backend API |
| JavaScript | Application Logic |
| CSS | Styling |
| JSON | Movie Data Storage |

---

## 📂 Project Structure

```text
Take-Home-Assignment/
│
├── public/
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│
├── server/
│   ├── server.js
│   └── movies_metadata.json
│
├── package.json
├── README.md
└── package-lock.json
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/<your-username>/Take-Home-Assignment.git
```

### Navigate to the Project Folder

```bash
cd Take-Home-Assignment
```

### Install Dependencies

```bash
npm install
```

---

## ▶️ Running the Application

### Start Backend Server

```bash
node server/server.js
```

Backend runs on:

```text
http://localhost:5000
```

### Start React Application

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 📡 API Endpoint

### Get All Movies

```http
GET /api/movies
```

### Example Response

```json
[
  {
    "id": 1,
    "title": "Inception",
    "year": 2010
  }
]
```

---

## 🎯 Learning Outcomes

Through this project, the following concepts were implemented:

- React Components
- State Management
- REST API Development
- Express Routing
- JSON Data Handling
- Client-Server Communication
- Project Structure and Organization

---

## 🔮 Future Improvements

- Movie Search
- Genre Filtering
- Sorting Options
- Pagination
- Movie Details Page
- Database Integration
- User Authentication

---

## 📷 Application Preview

_Add screenshots of your application here._

---

## 👩‍💻 Author

**Latshitha Mahendran**

Developed as part of a Full Stack Web Development Take-Home Assignment.

---

## 📄 License

This project is created for educational and demonstration purposes.
