# React Redux Posts App
A simple post management website built with **React**, **Redux**, and **Tailwind CSS**.

---

## Features
- Display a list of posts with pagination  
- Add new posts using `PostForm`  
- Manage global state with **Redux**  
- Responsive UI with **Tailwind CSS**

---

## Installation
```bash
npm install
npm run start

## Project Structure
react-redux-posts-app/
├── public/
├── src/
│   ├── components/
│   │   ├── LoadingSpinner.js      # Loading spinner component
│   │   ├── Navigation.js          # Navigation bar with clickable logo
│   │   ├── Pagination.js          # Pagination component
│   │   ├── PostCard.js            # Post card for displaying a single post
│   │   ├── PostForm.js            # Form to add a new post with validation
│   │   └── PostsList.js           # List of posts with pagination
│   ├── redux/
│   │   ├── actions/
│   │   │   └── postsActions.js    # Actions & thunks for posts
│   │   ├── reducers/
│   │   │   ├── index.js           # Root reducer
│   │   │   └── postsReducer.js    # Posts reducer
│   │   └── store.js               # Redux store configuration
│   ├── App.js                     # Main app component
│   ├── index.js                   # Entry point with Redux Provider
│   ├── index.css                  # Tailwind CSS imports
│   ├── App.css                    # App styles
│   └── ...
├── package.json                   # Dependencies & scripts
├── tailwind.config.js             # Tailwind configuration
└── README.md                      # Documentation


## API Endpoints
+ GET: https://jsonplaceholder.typicode.com/posts → Fetch list of posts
+ POST: https://jsonplaceholder.typicode.com/posts → Create a new post