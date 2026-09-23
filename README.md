# Garibook

A modern, responsive landing page for **Garibook** — Bangladesh's first and only zero-commission intercity car rental platform.

**Live Demo:** [https://garibook-nine.vercel.app/](https://garibook-nine.vercel.app/)

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | GSAP 3 + ScrollTrigger |
| Icons | React Icons |
| Font | Montserrat (Google Fonts) |

## 📦 Project Structure

```
Garibook/
├── public/
│   └── Assets/                # Images, logos, SVGs
│       ├── Destination/       # Blog/destination card images
│       ├── Passengers/        # Passenger review thumbnails
│       ├── Top-news/          # News article images & logos
│       └── footer/            # Footer section assets
├── src/
│   ├── components/            # 14 section-level React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── BookingCard.jsx
│   │   ├── BlueSection.jsx
│   │   ├── OurServices.jsx
│   │   ├── FreedomSection.jsx
│   │   ├── TripTypesSection.jsx
│   │   ├── BookingToArrival.jsx
│   │   ├── SmartDriver.jsx
│   │   ├── TopNews.jsx
│   │   ├── Passengers.jsx
│   │   ├── Destinations.jsx
│   │   ├── DownloadApp.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                # Root layout + ScrollToTop + DraggableChat
│   ├── App.css                # Legacy Vite scaffold styles (unused)
│   ├── index.css              # Tailwind directives + custom theme tokens
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML shell
├── vite.config.js             # Vite + Tailwind + React plugin config
└── package.json
```

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/ashiqurrhmn/garibook.git
cd garibook

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.


## 📄 License

This project is proprietary. All rights reserved by Garibook.
