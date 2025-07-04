# Netflix Clone 🎬

A fully responsive Netflix UI clone built with React, Tailwind CSS, Redux Toolkit,React-Router-DOM, Firebase Authentication, and TMDB API.

## 🚀 Features

-	🔥 Modern Landing Page with animated sections and smooth scroll
-	🎨 Fully responsive UI built with Tailwind CSS
-	🔐 Firebase Authentication (Signup, Login, Email Verification, Password Reset)
-	👤 Multi-profile support with Add/Edit/Delete functionality
-	🧠 Profile-based personalized experience
-	🎞️ Dynamic Movies/TV Shows sections using TMDB API
-	🆕 “New & Popular” and “Browse by Languages” pages
-	⭐ Add to / Remove from “My List” (stored in Firestore)
-	🔎 Search functionality with real-time filtering
-	🎬 Movie Detail Modal with cast, genres, and description
-	🎭 Hover previews and interactive modals (Netflix-style)
-	🌐 Protected Routes and Auth-aware Navigation
-	🧩 Redux Toolkit for global state management
-	⚡ Deployed using Vercel with Serverless Functions (for secure API requests)

## 🛠️ Tech Stack

- React + Vite
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- Firebase Authentication
- FireStore Database
- Firebase Email Verification & Password Reset
- TMDB API
- Vercel Serverless Functions
- Vercel Deployment

## 📷 Screenshots

_Add screenshots here once you finish!_

## 📁 Folder Structure
```
src/
├── assets/
├── auth/
│   └── auth.js
├── components/
│   ├── AuthUserComp/
│   │   ├── HomePageComp/
│   │   │   ├── CategoryModal.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── MovieCard.jsx
│   │   │   ├── MovieRow.jsx
│   │   │   ├── MoviesBanner.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NavbarSearch.jsx
│   │   │   ├── NewPopularBanner.jsx
│   │   │   ├── ProfileBtn.jsx
│   │   │   └── TVShowsBanner.jsx
│   │   ├── ProfileComp/
│   │   │   ├── AddProfileModal.jsx
│   │   │   ├── EditProfileModal.jsx
│   │   │   ├── ProfileCard.jsx
│   │   ├── AuthNavbar.jsx
│   │   ├── HomeNavbar.jsx
│   │   ├── LogoutBtn.jsx
│   │   └── ResetPassModal.jsx
│   └── LandingPageCom/
│       ├── Footer.jsx
│       ├── FrequentQues.jsx
│       ├── GtngSttdForm.jsx
│       ├── HeroSection.jsx
│       ├── JoinReasons.jsx
│       ├── LandingFooter.jsx
│       ├── LandingNavbar.jsx
│       ├── Navbar1.jsx
│       └── TrendingSection.jsx
├── features/
│   ├── moviesSlice.js
│   └── profileSlice.js
├── firebase/
│   ├── firebase.js
│   ├── firestoreUtils.js
│   └── myList.js
├── Layout/
│   └── HomeLayout.jsx
├── pages/
│   ├── User/
│   │   ├── BrowsePages/
│   │   │   ├── Account.jsx
│   │   │   ├── BrowseByLanguages.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Movies.jsx
│   │   │   ├── MyListPage.jsx
│   │   │   ├── NewPopular.jsx
│   │   │   ├── SearchPage.jsx
│   │   │   └── TVShows.jsx
│   │   ├── CreateProfile.jsx
│   │   ├── EmailVerified.jsx
│   │   ├── FirebaseActionRouter.jsx
│   │   ├── Profiles.jsx
│   │   ├── ResetPassword.jsx
│   │   └── VerifyEmail.jsx
│   └── Visitor/
│       ├── LandingPage.jsx
│       ├── Login.jsx
│       ├── Signup.jsx
│       └── WelcomePage.jsx
├── redux/
│   └── store.js
├── routes/
├── utils/
│   ├── constants.js
│   ├── SpinnerOverlay.jsx
│   ├── SpinnerOverlay2.jsx
│   ├── SpinnerOverlay3.jsx
│   └── useDebounce.js
├── App.jsx
├── constants.js
├── index.css
├── index.js
├── main.jsx
├── .env
├── .env.local
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md

```


## Contact

Created by [@sumitattri](https://github.com/Sumiattri)  
📧 Email: sumitattri165@gmail.com  
🔗 LinkedIn: (https://www.linkedin.com/in/sumit-attri-3147b9257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## 🔧 Installation

```bash
git clone https://github.com/sumitattri/netflix-clone.git
cd netflix-clone
npm install
npm run dev



