import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Zomato from "@/public/Zomato.png";
import ECom from "@/public/E-com.png";
import Trust from "../assets/portfolio/charitableTrust.png";
import Voting from "../assets/portfolio/Voting dapp.png";
import Etherpay from "../assets/portfolio/EtherPay.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    date: "04/2023 - present",
  },
] as const;

export const projectsData = [
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
  {
    title: "E-commerce",
    description:
      "Created a feature-rich E-commerce web app with user authentication, product filtering, search, profile management, and card payments, alongside admin functions for category and product management",
    tags: [
      "React",
      "MongoDB",
      "Mongoose ",
      "Tailwind",
      "css",
      "Express.js",
      "Recoil (For state Management)",
      "Zod (for input validation)",
      "Braintree (for payments)",
    ],
    imageUrl: ECom,
    live: "https://e-commerce-app-jayraj.vercel.app/",
    Github: "https://github.com/Jayrajrodage/E-Commerce-App-Frontend",
    Github2: "https://github.com/Jayrajrodage/E-Commerce-App-backend",
  },
  {
    title: "CharityDAO",
    description:
      "CharityDAO is a decentralized autonomous organization (DAO) on the Ethereum blockchain that allows people to donate to a charity and vote on how the funds are used.",
    tags: ["Solidity", "React", "Ether.js", "Remix.IDE"],
    imageUrl: Trust,
    live: "https://charitabletrust.vercel.app/",
    Github: "https://github.com/Jayrajrodage/charitable-trust",
    Github2: "",
  },
  {
    title: "Voting Dapp",
    description:
      "This project is a web-based voting application that allows a chairperson to create and manage candidate data, and voters to cast their votes. The application uses React for the front-end, Solidity for the smart contract that runs on the Ethereum blockchain, and Ether.js to interact with the blockchain",
    tags: ["Solidity", "React", "Ether.js", "Remix.IDE"],
    imageUrl: Voting,
    live: "https://charitabletrust.vercel.app/",
    Github: "https://votingdapp-jayrajrodage.vercel.app/",
    Github2: "",
  },
  {
    title: "EtherPay",
    description:
      "EtherPay is a platform where you can safely send and store your crypto (ETH) with the help of MetaMask. You can save recipient addresses and view your recent transactions.",
    tags: ["Solidity", "React", "Ether.js", "Remix.IDE"],
    imageUrl: Etherpay,
    live: "https://etherpay-jayrajrodage.vercel.app/",
    Github: "https://github.com/Jayrajrodage/EtherPay",
    Github2: "",
  },
] as const;

export const Frontend = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Recoil",
  "zustand",
] as const;

export const Backend = [
  "Express",
  "Python",
  "Node.js",
  "Mongoose",
  "MongoDB",
] as const;

export const Blockchain = [
  "Solidity",
  "Truffle",
  "HardHat",
  "Ether.js",
  "Web3.js",
] as const;
export const Tools = ["Git", "GitHub", "Postman", "npm", "VS code"] as const;
