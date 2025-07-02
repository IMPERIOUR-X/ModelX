# 🧠 ModelX – AI-Powered Resume Builder

ModelX is an intelligent resume generation platform designed to help users craft high-quality, ATS-friendly resumes through simple prompts. Whether you're a developer, marketer, designer, or fresh graduate, ModelX helps you translate your experience into professional resumes tailored to your goals.

## 🚀 Features

- ⚡ AI-powered resume generation from natural language prompts
- 📄 Customizable resume templates and themes
- 💾 Save, bookmark, and organize multiple resumes
- 💬 Interactive chat workspace for guided resume building
- 🌗 Light & Dark theme toggle for better accessibility
- 📁 Auto-save and export in PDF format (coming soon)
- 👤 User authentication and personalized settings
- 🛠️ Settings for privacy, notifications, appearance, and language

## 🧪 Demo Flow (in development)

Currently, the resume generation is in demo mode. When a user submits their first prompt, they receive a guided message flow:
1. ✍️ Acknowledge the prompt
2. 👤 Ask for the user's name
3. ⚠️ Send a demo resume with a notice that full features are still in development

## 🧱 Tech Stack

- **Frontend:** React.js (with React Router and Context API)
- **UI Library:** Material UI (MUI)
- **Styling:** MUI Theme System + Styled Components
- **State Management:** `useContext` + `useReducer`
- **Animations:** Framer Motion
- **Deployment:** Vercel
- **Mock Database:** Local mock data (planned MongoDB + Express integration)

## 📂 Folder Structure

modelx-frontend/ ├── components/ ├── pages/ ├── context/ ├── data/ ├── hooks/ ├── theme.js ├── AppRouter.js ├── App.js

# 👤 Author

Prosper Emmanuel – Frontend Developer
💼 Built with ❤️ as a portfolio-grade real-world application

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/modelx.git
cd modelx
npm install
npm start

