import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import connectify from "@/public/connectify.png"
import dashboard from "@/public/dashboard.png"
import dialdeck from "@/public/dialdeck.png"

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
] as const

export const experiencesData = [
  {
    title: "Graduated college",
    location: "Bengaluru, KA",
    description:
      "I graduated with a Bachelor of Engineering degree in Computer Science. I immediately found a job as a fullstack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Fullstack Developer",
    location: "Chennai, TN",
    description:
      "I am currently working as a fullstack developer in a startup.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const

export const projectsData = [
  {
    title: "Connectify",
    description:
      "A social media website with proper authentication and authorization. Users can add or remove friends as well as create, like and comment on posts.",
    tags: ["React", "Node", "MongoDB", "Tailwind", "Express"],
    imageUrl: connectify,
    url: "https://admin-frontend-3c8g.onrender.com"
  },
  {
    title: "Dashboard App",
    description:
      "Data analytics board for enterprises. I developed this as an assignment for the interview round of a startup. It has features like filtering, sorting and pagination.",
    tags: ["React", "Node", "MongoDB", "Express", "TypeScript", "Tailwind"],
    imageUrl: dashboard,
    url: "https://telescope-dashboard.netlify.app"
  },
  {
    title: "DialDeck",
    description:
      "A web based phone directory for quick access to contacts. It shows number of contacts, supports CRUD operations and has features like filtering and sorting.",
    tags: ["React", "TypeScript", "Tailwind", "Figma"],
    imageUrl: dialdeck,
    url: "https://dial-deck.vercel.app"
  },
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Nuxt.js",
  "FastAPI",
  "Node.js",
  "Git",
  "Tailwind",
  "Figma",
  "MongoDB",
  "Express.js",
  "Redux",
  "PostgreSQL",
  "Python",
  "C++",
  "Framer Motion",
] as const
