import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Zomato from "@/public/Zomato.png";
import ECom from "@/public/E-com.png";
import Lingo from "../assets/portfolio/Lingo.png";
import TriggerX from "../assets/portfolio/Triggerx.png";
import Uptime from "../assets/portfolio/Uptime.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
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
    name: "Experience",
    hash: "#experience",
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
    workp1link: "",
    Workp2: "",
    workp2link: "",
    Workp3: "",
    workp3link: "",
    Workp4: "",
    description: "I graduated from Bigce Solapur. with 8.65 CGPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },

  {
    title: "Full-Stack Developer",
    location: "MalakTel (Remote)",
    Workp1:
      " 1. Developed and launched  the official ERC20 token, MAAT (Malak Token), for company payments on the Polygon blockchain.",
    workp1link:
      "https://polygonscan.com/token/0xEA3b5Cf8cC27925FcD151972b4D2f3dE53eD0C70",
    Workp2:
      " 2. Successfully designed and launched multiple websites, including the company's official site and a crypto-price and news platform, highlighting web development skills.",
    workp2link: "https://malaktel-official.com/",
    Workp3:
      " 3. Collaborating with a colleague to build a dynamic live auction platform, allowing users to participate in live video call auctions and sell unique products, demonstrating teamwork and innovation. ",
    workp3link: "https://auction-malaktel.vercel.app/",
    description:
      "My stack includes Solidity, React, Node.js, javaScript, Tailwind, Mongoose and MongoDB.   I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "04/2023 - 04/2025",
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
