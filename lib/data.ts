import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Zomato from "@/public/Zomato.png";
import Lingo from "../assets/portfolio/Lingo.png";
import TriggerX from "../assets/portfolio/Triggerx.png";
import Uptime from "../assets/portfolio/Uptime.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated From Bigce Solapur",
    location: "Solapur, Maharashtra",
    Workp1: "",
    description: "I graduated from Bigce Solapur. with 8.65 CGPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },

  {
    title: "Full-Stack Developer",
    location: "MalakTel (Remote)",
    Workp1:
      " Led the development of 3 MVPs from scratch — including real-time auction, Lms, and freelancing platforms. Beyond coding, I also handled demos, pitched to customers, and resolved customer issues.",
    description:
      "Tech-: Ionic, React, Capacitor, Express.js, Firebase Realtime DB, MongoDB, AWS S3, Elastic Beanstalk, Stripe, NowPayments, BunnyCDN",
    icon: React.createElement(FaReact),
    date: "04/2023 - 04/2025 (2 years)",
  },
  {
    title: "Full-Stack Engineer",
    location: "OneTap (Remote)",
    Workp1:
      " Building and maintaining Attendance App to automate check-in and check-out processes.",
    description:
      "Tech-: React, React Native, Express.js, MongoDB, Digital Ocean, CI/CD, Stripe.",
    icon: React.createElement(FaReact),
    date: "08/2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Uptime",
    description:
      "Uptime-: Create api monitors, get downtime alerts, view logs, analytics, and publish customizable public status pages easily.",
    tags: [
      "React.js",
      "Express.js",
      "postgresql",
      "Aws(lambda)",
      "Tiny-bird(TimeseriesDB)",
      "bullmq",
      "redis",
      "prismaORM",
      "Typescript",
      "Tailwind",
      "nodemailer",
      "stripe",
      "zustand",
      "Shadcn(ui)",
      "tanstack-query",
      "React-hook-form",
    ],
    imageUrl: Uptime,
    live: "https://uptimely.top",
    Github: "https://github.com/Jayrajrodage/uptime",
    Github2: "",
  },
  {
    title: "TriggerX",
    description:
      "TriggerX is a workflow automation platform like Zapier, streamlining tasks, boosting productivity, and integrating essential tools.",
    tags: [
      "Next.js",
      "prismaORM",
      "postgresql",
      "Typescript",
      "Tailwind",
      "zustand",
      "xyflow",
      "React-hook-form",
    ],
    imageUrl: TriggerX,
    live: "https://trigger-x-puce.vercel.app",
    Github: "https://github.com/Jayrajrodage/TriggerX",
    Github2: "",
  },
  {
    title: "Duolingo-clone",
    description:
      "Interactive (Android, ios and web) platform for language learning with lessons, quizzes, and progress tracking",
    tags: [
      "Ionic",
      "capacitor",
      "Typescript",
      "Supabase",
      "Tailwind",
      "Clerk for Auth",
      "zustand(State Management)",
      "Stripe",
    ],
    imageUrl: Lingo,
    live: "https://duolingo-clone-jayraj.vercel.app",
    Github: "https://github.com/Jayrajrodage/Duolingo-clone",
    Github2: "",
  },
  {
    title: "Zomato-Clone",
    description:
      "Designed a Zomato-inspired food delivery platform, offering users seamless food discovery, ordering, and payment experiences, while simplifying restaurant management for owners.",
    tags: [
      "Next.js(13)",
      "React",
      "Typescript",
      "MongoDB",
      "Mongoose ",
      "Tailwind",
      "Clerk for Auth",
      "zustand(State Management)",
      "Zod (for input validation)",
      "Stripe Webhooks",
    ],
    imageUrl: Zomato,
    live: "https://zomato-clone-jayrajrodage.vercel.app",
    Github: "https://github.com/Jayrajrodage/Zomato-clone",
    Github2: "https://github.com/Jayrajrodage/Zomato-admin",
  },
] as const;

export const Frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Ionic",
  "Capacitor",
  "React",
  "Next.js",
  "Tailwind",
  "Recoil",
  "Zustand",
] as const;

export const Backend = [
  "Node.js",
  "Kafka",
  "Bullmq",
  "Redis",
  "Postgresql",
  "MongoDB",
  "TimeseriesDB",
  "TimescaleDB",
  "Express",
  "PrismaORM",
  "Mongoose",
] as const;

export const DevOps = [
  "AWS",
  "Docker",
  "Github CI/CD",
  "Prometheus",
  "Grafana",
] as const;

export const Tools = ["Git", "GitHub", "Postman", "npm", "VS code"] as const;
