# Aflix, a netlix style plus gemini search app

A modern movie discovery app that combines netflix UI with a Gemini powered search engine.

### The Smart Search Feature
in this app there is searching is kinda different, not by movie titles. i integrated the 'gemini ai api' to allow natural language searches. You can describe a vibe, a scene, or a theme, and the ai will understand what you are looking for and find it using tmdb data.

### Key Features
- **Live Data:** fetches real time trending, top rated, and upcoming movies from the tmdb api.
- **AI Discovery:** a search bar that actually "thinks" powered by google gemini.
- **Dynamic Pages:** detailed movie descriptions, ratings, and category based browsing.
- **Fully Responsive:** styled with tailwind Css to look great on any screen.

### Tech Stack
- **Frontend:** react.js
- **Styling:** tailwind Css
- **Data:** tmdb api
- **Ai Api:** google gemini ai

### Preview
<img width="1919" height="987" alt="Screenshot 2026-02-03 210919" src="https://github.com/user-attachments/assets/c2240c59-9a3f-4c3d-abc5-6069ea1d278d" />

### Setup

1. clone the repository

```bash
https://github.com/Aflah-Paruthicode/Aflix.git
```

2. navigate into the project folder

```bash
cd ./Aflix
```

3. install dependencies

```bash
npm install
```

4. add environment variables

```bash
 
VITE_TMDB_API_TOKEN = "replace with your tmdb api token"

VITE_GEMINI_API_KEY = "replace with your gemini api key"

#  you can get these all fire base keys at once when you create a project in it.
VITE_FIREBASE_API_KEY = "replace with your fibase api key"
VITE_FIREBASE_AUTH_DOMAIN = "replace with your auth domain"
VITE_FIREBASE_PROJECT_ID = "replace with your project id"
VITE_FIREBASE_STORAGE_BUCKET = "replace with your storage bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID = "replace with your sender id"
VITE_FIREBASE_APP_ID = "replace with your app id"

```

5. start building

```bash
npm run dev
```

### What I Learned   
This project was my first deep dive into connecting AI with a frontend. I learned how to prompt the AI to return data that helps filter movie results, and how to handle complex api flows.

---

Developed with love, by Aflah 🫰 <br/>
if this repo felt useful! consider giving it a star 😉
