# 🏦 Medical Application (appointment with a doctor)

![Next.js](https://img.shields.io/badge/Next.js-15.1.8-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)
![Zod](https://zod.dev/) for schema validation
![SMSNotifications](https://img.shields.io/badge/Twilio-FF2D55?style=for-the-badge&logo=twilio&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)



**CarePulse** is a modern medical web application for booking doctor appointments, managing patient data, and streamlining clinic workflows.

## 🚀 Live Demo

**🔗 [View Live Demo](https://carepulse-brown-three.vercel.app/)**

## ✨ Features

- 🔐 **Secure Authentication** with Appwrite
- 🩺 **Book appointments** with available doctors
- 📅 **Choose** specific dates and times
- 📲 **Phone number** validation with country code support
- 📩 **SMS notifications** with Twilio
- 💻 **Fully responsive** design
- 🌐 **SEO-friendly** structure and meta tags

## 🛠️ Tech Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) for schema validation

### Backend & Services
- [Appwrite](https://appwrite.io/) – Auth, database, functions
- [Twilio](https://www.twilio.com/) – SMS notifications
- [Vercel](https://vercel.com/) – Deployment
- [Sentry](https://img.shields.io/badge/Sentry-Error_Monitoring-362D59?logo=sentry)

### UI/UX
- [Shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Design_System-000000?logo=shadcnui)
- [Radix UI](https://img.shields.io/badge/Radix_UI-Primitives-161618?logo=radix-ui)
- [Chart.js](https://img.shields.io/badge/Chart.js-Graphs-FF6384?logo=chart.js)
- [React Hook Form](https://img.shields.io/badge/React_Hook_Form-Forms-EC5990?logo=reacthookform)
- [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Appwrite account (or self-hosted instance)
- Twilio account (optional for SMS)

### Installation

1. **Clone the repository**
- git clone git@github.com:eesyDev/carepulse.git
- cd carepulse


2. **Install dependencies**
- npm install

3. **Set up environment variables**
- cp .env.example .env.local
- Fill in your `.env.local`:

## Appwrite
```PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
DOCTOR_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ENDPOINT=

NEXT_PUBLIC_ADMIN_PASSKEY=
SENTRY_AUTH_TOKEN=
```

## Plaid
```PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=sandbox
```

## Dwolla
```DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```

4. **Run the development server**

```npm run dev```

- Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Live Demo

**🔗 [View Live Demo](https://carepulse-brown-three.vercel.app/)**

## 🌐 Deployed on Vercel

This project is deployed and hosted on [Vercel](https://carepulse-brown-three.vercel.app/).


---

## ⭐ Star this repo if you find it helpful!

