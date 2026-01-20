# WasteTrack Frontend - Next.js Application

A responsive Next.js frontend for the Community-Driven Waste Segregation Reporting System.

## Features

### 🏠 Household Module
- Daily waste segregation reporting interface
- Photo proof upload capability
- Real-time segregation score tracking
- Gamified reward system with badges and points

### 🤝 Community Verification
- Peer review interface for report verification
- Flagging system for questionable submissions
- Leaderboard tracking for volunteer contributions

### 🏛️ Authority Dashboard
- Ward-wise segregation analytics
- Real-time compliance monitoring
- Defaulter identification
- Trend analysis and data visualization

## Tech Stack

- **Framework:** Next.js 15+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **HTTP Client:** Axios
- **Visualization:** Recharts
- **Icons:** Lucide React

## Prerequisites

- Node.js 18+ and npm
- Backend API running on `http://localhost:5000`

## Getting Started

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── login/                # Login page
│   ├── register/             # Registration page
│   └── dashboard/
│       ├── household/        # Household dashboard
│       ├── community/        # Community verification
│       └── authority/        # Authority analytics
├── components/
│   ├── layout/               # Navigation & layout
│   ├── household/            # Household components
│   ├── community/            # Community components
│   └── authority/            # Authority components
└── lib/
    └── api.ts                # API client & endpoints
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
