# 🐳 Hello Docker – Fullstack React + Spring Boot App

[![Backend CI](https://github.com/NoushadPatell/hellodocker/actions/workflows/ci-cd-backend.yml/badge.svg)](https://github.com/NoushadPatell/hellodocker/actions/workflows/ci-cd-backend.yml)
[![Docker Compose CI](https://github.com/NoushadPatell/hellodocker/actions/workflows/ci.yml/badge.svg)](https://github.com/NoushadPatell/hellodocker/actions/workflows/ci.yml)

This is a simple fullstack web application built with:

- ⚙️ **Spring Boot (Java)** for the backend  
- 🌐 **React + Vite** for the frontend  
- 🐳 Fully containerized using **Docker**  
- 🔁 CI/CD powered by **GitHub Actions**  
- 🚀 Deployed to **Render (backend)** and **Vercel (frontend)**

---

## 📸 Demo

> Visit the app: [https://hellodocker.vercel.app](https://hellodocker.vercel.app)

![Demo Screenshot Placeholder](https://via.placeholder.com/1200x600?text=App+Screenshot)

---

## 📁 Project Structure

```text
hellodocker/
├── backend/                 # Spring Boot backend
│   ├── Dockerfile
│   └── src/...
├── frontend/                # React + Vite frontend
│   ├── Dockerfile
│   └── src/...
├── docker-compose.yml       # Local dev orchestration
└── .github/workflows/       # GitHub Actions
    ├── ci.yml               # CI: Docker Compose build & test
    └── ci-cd-backend.yml    # CD: Auto-deploy backend to Render
