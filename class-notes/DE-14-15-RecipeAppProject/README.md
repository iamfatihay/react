# Recipe App
## Live Link: https://fatihay-blog-app.vercel.app/
## Description
This is a simple recipe application that allows users to search and explore various food recipes. Users can view recipes on the home page and access detailed information by clicking on them. The application supports user registration and login using Firebase authentication. The app features a customizable navbar and an appealing design.

## Features
- <span style="font-size: larger;">**User Authentication (Login) and Registration (Register)**</span>: Utilizes Firebase for user authentication and authorization. Allows users to register and login to the application.
- <span style="font-size: larger;">**Home Page**</span>: Provides users with a home page that lists various food recipes. Displays the name and image of each recipe.
- <span style="font-size: larger;">**Interact and Engage**</span>: Allow readers to leave comments, engage in discussions, and share their opinions on blog posts.
- <span style="font-size: larger;">**User Profiles**</span>: Customize your profile, showcase your writing portfolio, and connect with fellow bloggers.
- <span style="font-size: larger;">**Like and Share**</span>: Enable readers to show their appreciation for captivating posts and share them across social media platforms.
- <span style="font-size: larger;">**Responsive Design**</span>: Enjoy a smooth and intuitive user experience on various devices, including desktops, tablets, and mobile phones.

## Project Skeleton
```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   └── robots.txt
├── src
│   ├── App.js
│   ├── assets
│   │   └── [your files...]
│   ├── auth
│   │   └── firebase.js
│   ├── components
│   │   ├── footer
│   │   │   ├── Footer.css
│   │   │   └── Footer.jsx
│   │   ├── header
│   │   │   ├── Header.jsx
│   │   │   └── HeaderStyles.jsx
│   │   └── navbar
│   │       ├── Navbar.jsx
│   │       └── NavbarStyles.jsx
│   ├── context
│   │   └── AuthContext.js
│   ├── helpers
│   │   └── ToastNotify.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── about
│   │   │   ├── About.jsx
│   │   │   └── AboutStyles.jsx
│   │   ├── details
│   │   │   ├── Details.jsx
│   │   │   └── DetailsStyles.jsx
│   │   ├── home
│   │   │   ├── Home.jsx
│   │   │   ├── HomeStyles.jsx
│   │   │   └── RecipeCard.jsx
│   │   ├── login
│   │   │   ├── Login.jsx
│   │   │   └── LoginStyles.jsx
│   │   └── register
│   │       └── register.jsx
│   └── router
│       ├── AppRouter.jsx
│       └── PrivateRouter.jsx
└── tailwind.config.js
```