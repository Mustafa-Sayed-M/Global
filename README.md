# Global ✈️🌍

**Global** is a modern travel booking web application built with **React.js** and **Tailwind CSS**. It offers users the ability to explore destinations, book flights or hotels, and manage their accounts—all through a clean and responsive UI.

> ⚠️ This project is still under active development. Only the landing page and part of the user authentication flow are currently functional.

---

## ✨ Features

- 🌐 Responsive and accessible design
- 🔐 User Authentication with Clerk (Sign in, Sign up)
- 🛫 Flights booking flow UI (in progress)
- 🏨 Hotels booking flow UI (in progress)
- 👤 Account management pages
- 📱 Mobile-first UI, designed from Figma
- 💳 Modal to add a new card payment

---

## 📁 Project Structure

    src/
    ├── Atoms/
    ├── Components/
    │ ├── Footer/
    │ ├── Headers/
    │ ├── Sections/
    │ └── Nav/
    ├── Contexts/
    ├── Data/
    │ ├── popularDestinations.json
    │ └── reviews.json
    ├── Layouts/
    ├── Modals/
    ├── Pages/
    │ ├── AccountPages/
    │ ├── AuthPages/
    │ ├── FlightsPages/
    │ ├── HotelPages/
    │ ├── HomePage.jsx
    │ └── FavoritesPage.jsx
    ├── App.jsx
    ├── index.css
    └── main.jsx

---

## 🧩 Tech Stack

| Tech                    | Description                                 |
| ----------------------- | ------------------------------------------- |
| **React.js**            | Frontend library for building UI            |
| **Tailwind CSS**        | Utility-first CSS framework                 |
| **Vite**                | Fast bundler and dev server                 |
| **React Router DOM v7** | Routing solution for React                  |
| **Swiper.js**           | Interactive sliders for destinations/images |
| **Clerk**               | Authentication provider (Sign in, Sign up)  |

---

## 📦 Installation

```bash
git clone https://github.com/mustafa-sayed-m/global.git
cd global
npm install
npm run dev
```

## 🧪 Environment Variables

Make sure to create a .env file in the root and add your Clerk publishable key:

    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publish_key

## 🗂️ Available Scripts

- npm run dev – start development server
- npm run build – build for production
- npm run preview – locally preview production build
- npm run lint – run ESLint checks

## 🧪 UI Preview

Coming soon – once core flows are complete.

## 🧑‍💻 Author

Frontend Developer: Mustafa

Portfolio: [view portfolio](https://my-portfolio-frontend-sandy.vercel.app/)

## 📌 Status

This project is a work in progress. The landing page and core authentication flow are mostly done. Flights, hotels, and account pages are being built step-by-step.

## ⭐️ Show your support

If you like this project, consider giving it a ⭐️ on GitHub!
