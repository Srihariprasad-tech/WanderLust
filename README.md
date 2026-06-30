# 🏡 Wanderlust - Full Stack Airbnb Clone

A full-stack web application inspired by Airbnb that allows users to explore, create, edit, and review travel accommodations around the world.

Built using Node.js, Express.js, MongoDB, EJS, Passport.js, and Cloudinary.

---

## 🚀 Live Demo

📂 GitHub Repository: https://github.com/Srihariprasad-tech/WanderLust
    Live Respository: https://wanderlust-project-2z9q.onrender.com
---

## 📖 Project Overview

Wanderlust is a full-stack web application where users can:

- Browse accommodation listings
- Create their own listings
- Upload listing images
- Edit or delete listings
- Register and Login securely
- Add reviews and ratings
- Manage authentication and authorization

The project follows the MVC Architecture and implements real-world backend concepts such as authentication, authorization, middleware, session management, image uploads, cloud storage, and database relationships.

---

# ✨ Features

## 👤 User Authentication

- User Signup
- User Login
- User Logout
- Password Hashing
- Session Management

## 🏠 Listings

- Create New Listing
- View All Listings
- View Individual Listing
- Edit Listing
- Delete Listing

## ⭐ Reviews & Ratings

- Add Reviews
- Delete Reviews
- Rating System
- One-to-Many Relationships

## 📸 Image Upload

- Cloudinary Integration
- Multer Middleware
- Image Storage Management

## 🔒 Authorization

- Only listing owners can edit/delete listings
- Only review authors can delete reviews
- Protected Routes

## 💬 Flash Messages

- Success Alerts
- Error Alerts

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- Bootstrap 5
- EJS
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication & Security

- Passport.js
- Passport Local Strategy
- Express Session
- Connect Flash

## Image Storage

- Cloudinary
- Multer
- Multer Storage Cloudinary

## Deployment

- Render

## Development Tools

- VS Code
- Git
- GitHub
- MongoDB Compass
- Postman

---

# 📦 NPM Packages Used

```bash
express
mongoose
ejs
ejs-mate
method-override
passport
passport-local
passport-local-mongoose
express-session
connect-mongo
connect-flash
dotenv
multer
cloudinary
multer-storage-cloudinary
joi
```

---

# 📁 Folder Structure

```bash
Wanderlust/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── user.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   │   ├── style.css
│   │   └── rating.css
│   │
│   └── js/
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   │
│   └── users/
│       ├── signup.ejs
│       └── login.ejs
│
├── middleware.js
├── cloudconfig.js
├── app.js
├── .env
├── package.json
└── package-lock.json
```

---

# 🗄️ Database Schema

## User Model

```javascript
{
 username,
 email,
 password
}
```

## Listing Model

```javascript
{
 title,
 description,
 image,
 price,
 location,
 country,
 owner,
 reviews
}
```

## Review Model

```javascript
{
 comment,
 rating,
 author
}
```

---

# 🏗️ Application Architecture

```text
Browser (Client)
       │
       ▼
EJS + Bootstrap Frontend
       │
       ▼
Express Routes
       │
       ▼
Controllers
       │
       ▼
Mongoose Models
       │
       ▼
MongoDB Atlas
       │
       ▼
Cloudinary
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/wanderlust.git
```

## Navigate to Project Folder

```bash
cd wanderlust
```

## Install Dependencies

```bash
npm install
```

## Create Environment Variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_atlas_url

SECRET=your_secret_key

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

## Run Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

Visit:

```bash
http://localhost:8080/listings
```

---

# 🔥 Key Concepts Implemented

- MVC Architecture
- RESTful Routing
- CRUD Operations
- Authentication
- Authorization
- Middleware
- Session Management
- Flash Messages
- Cloudinary Image Uploads
- MongoDB Relationships
- Error Handling
- Async/Await
- Environment Variables
- Deployment

---

# 📸 Screenshots

### Home Page

(Add Screenshot Here)

### Listing Details

(Add Screenshot Here)

### Create Listing

(Add Screenshot Here)

### Login Page

(Add Screenshot Here)

---

# 🎯 What I Learned

Through this project I gained hands-on experience with:

- Node.js Development
- Express.js Framework
- MongoDB & Mongoose
- Authentication using Passport.js
- Cloudinary Image Uploads
- Backend Project Structure
- Session & Cookie Management
- Deployment on Render
- Building Production-Ready CRUD Applications

---

# 🚀 Future Improvements

- Search Functionality
- Maps Integration
- Wishlist Feature
- Booking System
- Payment Gateway Integration
- User Profiles
- Advanced Filters

---

# 👨‍💻 Author

## Srihariprasad S

🎓 B.Tech Information Science & Engineering Student

💻 Backend Developer | MERN Stack Learner

🧠 200+ LeetCode Problems Solved

🏆 Ideathon Winner

### Connect With Me

- GitHub: https://github.com/Srihariprasad-tech
- LinkedIn: https://linkedin.com/in/your-linkedin-profile
- Email: your-email@example.com

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It motivates me to build more projects and contribute to open source.

---

## ❤️ Built with Node.js, Express.js, MongoDB, Passport.js, Cloudinary & EJS
