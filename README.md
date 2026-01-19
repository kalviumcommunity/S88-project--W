# ♻️ Community-Driven Waste Segregation Reporting System

A MERN Stack platform designed to gamify, track, and verify household waste segregation to improve municipal recycling efficiency and accountability.

## 📄 Problem Statement

Municipal waste management systems often fail to track waste segregation at the household level effectively. This leads to several critical issues:

* **Poor recycling efficiency** due to mixed waste.
* **Increased landfill waste** and environmental damage.
* **Lack of accountability** from both citizens and collectors.
* **Minimal public participation** in sanitation initiatives.

Currently, authorities lack real-time data to monitor the situation, and households lack the motivation or feedback mechanisms to improve their segregation practices.

## 💡 Proposed Solution

This project introduces a community-driven reporting platform that bridges the gap between citizens and authorities:

1.  **Households** report daily waste segregation practices using photo proof.
2.  **Community Volunteers** verify these reports to ensure authenticity.
3.  **Municipal Authorities** monitor compliance via real-time dashboards.
4.  **Gamification** (points/badges) motivates responsible behavior.

Built using the **MERN Stack**, the system promotes accountability, data-driven decisions, and active citizen participation.

---

## 🌟 Key Features

### 🏠 Household Module
* **Daily Reporting:** easy interface to log Dry, Wet, and Hazardous waste.
* **Photo Proof:** Secure photo-based submission for validation.
* **Segregation Score:** Real-time tracking of compliance history.
* **Gamification:** Earn reward points and unlock badges for consistency.

### 🤝 Community Verification
* **Peer Review:** Volunteers verify neighbor reports to ensure data integrity.
* **Crowd-Sourced Moderation:** Ability to upvote valid reports or flag incorrect submissions.
* **Leaderboard:** Community rankings to foster healthy competition.

### 🏛️ Authority Dashboard
* **Analytics:** Ward-wise segregation trends and charts.
* **Defaulter Identification:** AI/Data-driven identification of non-compliant zones.
* **Complaint Management:** Integrated system for handling citizen feedback.
* **Reports:** Exportable data for government policy planning.

### 🔔 Motivation Mechanisms
* **Points & Badges:** Visual rewards for top performers.
* **Public Recognition:** Spotlights for high-performing households.
* **Education:** Notifications containing waste management tips.
* **Transparency:** Open performance tracking for the whole community.

---

## 🛠️ Tech Stack

### Frontend
* **Framework:** React.js
* **Styling:** Tailwind CSS / Bootstrap
* **HTTP Client:** Axios
* **Visualization:** Chart.js / Recharts

### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Authentication:** JWT (JSON Web Tokens)

### Database
* **Database:** MongoDB
* **ODM:** Mongoose

### Additional Tools
* **Image Storage:** Cloudinary (for proof uploads)
* **Notifications:** Firebase / Nodemailer
* **Geolocation:** Map API (for ward-based tracking)

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* Node.js (v14+)
* MongoDB (Local or Atlas)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/waste-segregation-system.git](https://github.com/your-username/waste-segregation-system.git)
    cd waste-segregation-system
    ```

2.  **Install Backend Dependencies**
    ```bash
    cd server
    npm install
    ```

3.  **Install Frontend Dependencies**
    ```bash
    cd ../client
    npm install
    ```

4.  **Environment Variables**
    Create a `.env` file in the `server` directory and add the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_name
    CLOUDINARY_API_KEY=your_key
    CLOUDINARY_API_SECRET=your_secret
    ```

5.  **Run the Application**
    * **Server:** `npm run dev` (inside server folder)
    * **Client:** `npm start` (inside client folder)

---

## 🔮 Future Enhancements
* AI-based image recognition to auto-verify waste types.
* Integration with IoT Smart Bins.
* Mobile App (React Native) version.

## 📜 License
This project is licensed under the MIT License.