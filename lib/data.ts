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
    Workp2: "",
    Workp3: "",
    Workp4: "",
    Workp5: "",
    Workp6: "",
    Workp7: "",
    description: "I graduated from Bigce Solapur. with 8.65 CGPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },

  {
    title: "Full-Stack Developer",
    location: "MalakTel (Remote)",
    Workp1:
      " 1.Led the end-to-end development of e-commerce MVP, integrating live auction, real-time bidding, core e-commerce functionality, and dual payment systems (Crypto/Card) that acquired 10+ early adopters within 1 week.",
    Workp2:
      " 2. Built a seller dashboard to manage products, auctions, bid activity, customer history, and order tracking, resulting in smoother operations during testing.",
    Workp3:
      " 3. Developed an LMS and school management system from scratch with features like live/recorded classes, school Onboarding, and real-time teacher–student chat. It was pilot-tested in 5 schools.",
    Workp4:
      " 4. Built dashboard for educators to manage classes, chats, emails, and courses - whether teaching independently or as part of a school - that support both B2C and institutional use.",
    Workp5:
      " 5. Developed a flexible school admin panel with role-based access, student approvals, and calendar/email management.",
    Workp6:
      " 6. Built a freelancing platform with job posting, profile creation, application flow, payments, and real-time messaging — tested by 15 real users.",
    description:
      "Tech-: Ionic, React, Capacitor, Express.js, Firebase Realtime DB, MongoDB, AWS S3, Elastic Beanstalk, Stripe, NowPayments, BunnyCDN",
    icon: React.createElement(FaReact),
    date: "04/2023 - 04/2025 (2 years)",
  },
] as const;

export const projectsData = [
  {
    title: "Uptime",
    description:
      "Uptime-: Create monitors, get downtime alerts, view logs, analytics, and publish customizable public status pages easily.",
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
  "GitLab CI/CD",
  "Prometheus",
  "Grafana",
] as const;

export const Tools = ["Git", "GitHub", "Postman", "npm", "VS code"] as const;
