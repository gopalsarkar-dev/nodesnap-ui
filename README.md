## 📷 NodeSnap-ui

NodeSnap-UI is a modern and responsive frontend user interface for the NodeSnap backend (powered by Directus). It enables users to interact seamlessly with backend services such as file uploads, authentication, UserProfile, etc. Built with Next.js, Tailwind CSS and ShadcnUi

## 📈 Project Status 🛩️

✅ Currently 90% completed

. 📦 Basic dependencies installed (Shadcn/UI, Ky, Prettier plugin for TailwindCSS, Rimraf, etc.)

. ✅ Removed unnecessary/unused code and files for a cleaner, faster codebase..

## 🔗 Navigation

. ✅ TopBar / NavBar implemented with conditional rendering (based on auth state).

## 🔐 Authentication

. ✅ Login & Signup Forms with validation.

. ✅ Directus-based authentication integrated.

## 👤 User Profile Page

. ✅ Edit user account details (first_name, last_name, bio, tagsname).

. ✅ Profile avatar upload & update functionality.

. 🆕 Public profile pages for each user (view other users' profiles and posts).

## 🌙☀️ UI Theme

. ✅ Dark Mode support enabled with smooth toggle.

## 📰 Feed System

. ✅ FeedCard component displays all user posts dynamically.

. ✅ Shows post title, image, and author details.

## 📝 User Posts

. ✅ Users can create posts with a title and image upload.

. ✅ Posts linked to user profile.

## 🧿 Favicon

. ✅ Custom favicon.ico added.

## 🔧 Environment Configuration

. ✅ .env and @t3-oss/env-nextjs setup completed.

## 🛠️ Features

. 🔐 Secure Authentication (Login, Signup and Signout).

. 👤 Profile Management (Only login user can delete info, avatar and update info, avatar).

. 📰 User Feed (view all posts in a card-based UI).

. 📝 Create & Upload Posts (with title and image support).

. 🌙 Dark/Light Theme toggle.

. 🧩 Reusable UI components (ShadcnUI).

. ⚡ Fast API requests using Ky HTTP client.

. 🧑‍🤝‍🧑 Public Profile Pages (discover and view other users).

. 🔒 Protected routes

. 🔁 Real-time updates

. 📲 Responsive design

## 🏗️ Tech Stack

. Frontend Framework: Next.js (App Router)

. Styling: Tailwind CSS, Shadcn/UI

. Backend: Directus (Headless CMS)

. Data Fetching: Ky (HTTP Client)

. Validation: @t3-oss/env-nextjs and Zod

. Utilities: Prettier (with TailwindCSS plugin), Rimraf

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
