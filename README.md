# 🌍 Travel Website

A modern, responsive **Travel Website** built using **React** and **React Router**, focused on clean UI, smooth navigation, and an intuitive user experience. This project showcases frontend skills such as routing, state management, responsive layouts, and component-based architecture.

---

## ✨ Features

* **Navbar** with smooth navigation across pages
* **Hero Section** with visually engaging banner
* **Destinations Section** displaying different Indian states 
* **State Details Page**

  * Clicking on any state opens a dedicated page
  * Displays popular places of that state
* **Wishlist Functionality**

  * Add places to wishlist
  * View all saved places in the Wishlist section
* **Plan Trip Section**

  * Simple UI to plan trips (UI-focused, no backend)
* **About Us Page**

  * Describes the platform, vision, and travel experience
* **Footer** with clean and minimal design
* **Routing** implemented using React Router
* **Fully Responsive** (Mobile, Tablet, Desktop)

---

## 🛠️ Tech Stack

* **React.js**
* **React Router DOM** (for routing)
* **Tailwind CSS** (for styling)
* **Font Awesome Icons**
* **JavaScript (ES6+)**

---

## 📂 Project Structure (Overview)

```
src/
│── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Home.jsx 
│   ├── About.jsx
│   ├── Destinations.jsx
│   ├── StateDetails.jsx
│   ├── Wishlist.jsx
│   └── PlanTrip.jsx
│
│── public
│   ├──images 
│
│── assets/
│   └── assets.js
│
│── App.jsx
│── main.jsx
```

---

## 🔀 Routing Flow

* `/` → Home (Hero + Destinations)
* `/about` → About Us
* `/destinations` → All States
* `/state/:stateName` → State Places Page
* `/wishlist` → Wishlist Page
* `/plan-trip` → Plan Trip Page

Routing is handled using **React Router DOM**.

---

## ❤️ Wishlist Functionality

* Users can add places to the wishlist from state pages
* Wishlist data is managed using **React state**
* Saved places appear in the Wishlist section
* Simple and user-friendly UI

---

## 🎯 Project Purpose

This project is built to demonstrate:

* Frontend development skills
* UI/UX design sense
* Responsive layouts
* Routing and state handling in React

Backend and authentication are intentionally not included to keep the focus on **frontend architecture and design**.

Live Demo -- https://india-xplore.vercel.app/?section=home 

--- 

## 👩‍💻 Author

**Sakshi Kirola**
Frontend Developer 

---

⭐ If you like this project, don’t forget to star the repository!
