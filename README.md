# Wander — Travel Guide

A responsive travel guide built with React that helps users discover cities through local recommendations, travel insights, photography and cultural experiences.

Wander uses AI-generated travel information and dynamic photography to create a personalised city guide based on the destination searched by the user.

## 🌍 Live Demo

[Visit Wander](https://wander-travel-guide.netlify.app/)

## ✨ Features

- 🔎 Search for any city
- 🤖 AI-generated travel information
- 📍 Restaurant recommendations with Google Maps links
- 🗺️ Dynamic Google Maps integration
- 📸 Dynamic city photography using the Pexels API
- 🖼️ Responsive editorial-style gallery
- 🔍 Image lightbox for larger photos
- 🎵 Local music and culture discovery
- 📱 Fully responsive design
- ⚡ Loading state while searching for a destination
- ♿ Accessible navigation and interactive elements

## 🛠️ Technologies

- React
- JavaScript
- Vite
- CSS3
- CSS Grid
- Flexbox
- Axios
- Pexels API
- SheCodes AI API
- Google Maps
- Netlify

## 🔌 APIs

### SheCodes AI

Used to generate travel information dynamically, including:

- City descriptions
- Best time to visit
- Local food
- Local tips
- Restaurant recommendations

### Pexels API

Used to retrieve destination photography dynamically based on the city searched by the user.

### Google Maps

Used to display the searched city on an interactive map and provide links to restaurant locations.

## 📁 Project Structure

```text
wander-travel-guide/
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── CityInsights.jsx
│   │   ├── CityIntro.jsx
│   │   ├── CityMap.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── InsightCard.jsx
│   │   ├── LocalMusic.jsx
│   │   ├── RestaurantCard.jsx
│   │   ├── Restaurants.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── services/
│   │   ├── aiApi.js
│   │   └── pexelsApi.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 🔐 Environment Variables

API keys are stored in environment variables and are not included in the repository.

The `.env` file is excluded from Git using `.gitignore`.

For deployment, the required environment variables are configured in Netlify.

## 🎨 Design

Wander was designed with a clean editorial travel aesthetic using:

- Playfair Display for headings
- Montserrat for body text
- A deep purple colour palette
- Warm accent tones
- Responsive layouts
- CSS Grid and Flexbox

The interface was designed to combine visual storytelling with practical travel information.

## 📚 What I Practised

This project was developed as part of my web development learning journey and allowed me to practise:

- React component architecture
- React state and props
- API integration
- Asynchronous JavaScript
- Dynamic content rendering
- Responsive CSS
- CSS Grid and Flexbox
- Environment variables
- Error handling
- Loading states
- Accessible interactive components
- Git and GitHub
- Netlify deployment

## 👩‍💻 Author

Developed by **Joice Pamela**

[Portfolio](https://portfolio-pam-ortega.netlify.app/)

[GitHub](https://github.com/Pampinup)
