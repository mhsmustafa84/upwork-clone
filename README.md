<div align="center">

# 🌐 Upwork Clone - Freelance Marketplace Platform

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit%20%2F%20Thunk-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5%20%2F%20React--Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://react-bootstrap.github.io/)
[![i18n](https://img.shields.io/badge/i18next-Multi--Language-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://react.i18next.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

<p align="center">
  A feature-complete web clone of the <b>Upwork</b> freelance marketplace platform developed as the capstone graduation project for the <b>Information Technology Institute (ITI)</b> Frontend Development Track.
</p>

[🚀 Live Demo](http://mhsmustafa84.github.io/upwork-clone) • [✨ Key Features](#-key-features) • [🛠 Tech Stack](#-tech-stack) • [📁 Architecture](#-project-structure) • [💻 Getting Started](#-getting-started)

</div>

---

## 📌 Project Overview

This application reproduces the core user experience and workflows of Upwork, connecting clients seeking professional services with skilled freelancers worldwide. It features separate role-tailored dashboards, dynamic search and filtering, proposal submissions, job posting lifecycle, milestone contract tracking, and real-time messaging powered by Firebase.

### 🌐 Live Demo
You can explore the deployed application live here:  
👉 **[http://mhsmustafa84.github.io/upwork-clone](http://mhsmustafa84.github.io/upwork-clone)**

---

## ✨ Key Features

### 👤 Authentication & User Profiles
- **Multi-Role Authentication**: Seamless registration and sign-in for both **Clients** and **Talent (Freelancers)**.
- **Email Verification**: Integrated Firebase email verification security pipeline.
- **Comprehensive Profile Setup**: Portfolio items, hourly rates, skills tags, employment history, and bio summaries.

### 💼 Client Capabilities
- **Post Jobs**: Multi-step wizard to create job listings with category, budget type (hourly vs fixed price), required skill tags, and experience level.
- **Review Proposals**: Inspect incoming freelancer bids, review talent profiles, cover letters, and milestones.
- **Hire & Create Contracts**: Send offers, establish contractual terms, and initiate payments.
- **Reporting & Billing**: Monitor active contracts, transaction history, and coworker invitations.

### 🛠 Talent (Freelancer) Capabilities
- **Job Feed & Search**: Live search across job listings with filter facets by category, payment type, budget, and client rating.
- **Proposal Submissions**: Submit competitive bids with custom rates, milestone schedules, cover letters, and connects usage.
- **Contracts & Earnings**: Track ongoing contracts, milestones achieved, weekly summaries, and connects balance.
- **Saved Jobs & Alerts**: Bookmark listings for future proposal submissions.

### ⚡ Core Platform Capabilities
- **Real-Time Messaging**: Built-in chat module facilitating direct client-freelancer communication.
- **Internationalization (i18n)**: Multi-language interface support powered by `i18next`.
- **Responsive Layout**: Pixel-accurate UI crafted to match Upwork's design system across desktop, tablet, and mobile displays.

---

## 🛠 Tech Stack

| Domain | Technology / Library | Description |
| :--- | :--- | :--- |
| **Frontend Core** | React 18 | Declarative component-based UI framework |
| **State Management** | Redux & Redux Thunk | Centralized application state and asynchronous side effects |
| **Backend & Database** | Firebase & Firestore | Real-time database, authentication, and cloud storage |
| **Routing** | React Router v6 | Client-side dynamic routing with role-based route guards |
| **Styling & UI** | React-Bootstrap, Sass, CSS3 | Modular component styling and responsive grid layouts |
| **Localization** | `i18next` & `react-i18next` | Multi-language internationalization support |
| **Utility Libraries** | Axios, date-fns, phone input | HTTP requests, date manipulations, and phone validations |
| **Deployment** | GitHub Pages (`gh-pages`) | Automated build and static deployment pipeline |

---

## 📁 Project Structure

```text
upwork-clone/
├── public/                 # Static assets and HTML template
├── src/
│   ├── assets/             # Icons, illustrations, company logos, styles
│   │   ├── Img/
│   │   ├── Style/
│   │   └── svg/
│   ├── components/         # Reusable presentation and utility components
│   ├── pages/              # Application views organized by user role
│   │   ├── BeforeLoginPages/   # Landing page, Find Talent, Find Work, Auth
│   │   ├── ClientPages/        # Job posting, proposal review, contracts, billing
│   │   ├── TalentPages/        # Job search, profile manager, proposals, earnings
│   │   ├── Messages/           # Real-time chat & inbox
│   │   ├── Notifications/      # System notifications
│   │   └── EmailVerification/  # Email verification status screens
│   ├── redux/              # Redux store, actions, reducers, and thunks
│   ├── firebase.js         # Firebase configuration and service initialization
│   ├── i18n.js             # Internationalization setup
│   └── index.js            # Application root entry point
├── package.json
└── README.md
```

---

## 💻 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16.x or higher recommended)
- `npm` or `yarn`

### 1. Clone the Repository
```bash
git clone https://github.com/mhsmustafa84/upwork-clone.git
cd upwork-clone
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Firebase Configuration
Create a `.env` file in the root directory (or update `src/firebase.js`) with your Firebase project credentials:
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### 4. Run the Development Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Build for Production
```bash
npm run build
```

---

## 👨‍💻 Author

**Mustafa Mohamed**  
*Senior Frontend Developer*

- 🌐 **GitHub**: [@mhsmustafa84](https://github.com/mhsmustafa84)
- 💼 **LinkedIn**: [Mustafa Mohamed](https://www.linkedin.com/in/mhsmustafa84/)
- 📧 **Email**: [mhsmustafa84@gmail.com](mailto:mhsmustafa84@gmail.com)

---

## 📄 License

This project was built for educational and demonstration purposes as part of the ITI graduation program.
