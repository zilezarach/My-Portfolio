"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiNodedotjs,
  SiExpo,
  SiPuppeteer,
  SiNestjs,
  SiCheerio,
  SiMongodb,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import React, { JSX } from "react";

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  imageSrc: string;
  tech: { icon: JSX.Element; name: string }[];
};

const projects: Project[] = [
  {
    title: "ZileWatch",
    description:
      "A lightning-fast movie/social/games video streamer with ultra-fast downloads.",
    githubUrl: "https://streamzile.0xzile.sbs",
    imageSrc: "/projects/zilewatch.png",
    tech: [
      { icon: <SiReact size={20} className="text-cyan-400" />, name: "React" },
      {
        icon: <SiTailwindcss size={20} className="text-teal-400" />,
        name: "Tailwind",
      },
      {
        icon: <SiNodedotjs size={20} className="text-green-500" />,
        name: "Node.js",
      },
      {
        icon: <SiExpo size={20} className="text-cyan-400" />,
        name: "Expo",
      },
      {
        icon: <SiPuppeteer size={20} className="text-green-400" />,
        name: "Puppeeteer",
      },
      {
        icon: <SiCheerio size={20} className="text-rose-600" />,
        name: "Cheerio",
      },
      {
        icon: <SiTypescript size={20} className="text-blue-700" />,
        name: "Typescript",
      },
      {
        icon: <SiJavascript size={20} className="text-yellow-400" />,
        name: "Javascript",
      },
      {
        icon: <SiNestjs size={20} className="text-blue-700" />,
        name: "Nest.js",
      },
    ],
  },
  {
    title: "ZaccPos",
    description:
      "A scalable POS & e-commerce system ideal for growing businesses with extensive features like Inventory management",
    githubUrl: "https://zaccpos.0xzile.sbs",
    imageSrc: "/projects/zaccpos.png",
    tech: [
      { icon: <SiReact size={20} className="text-cyan-400" />, name: "React" },
      {
        icon: <SiTailwindcss size={20} className="text-teal-400" />,
        name: "Tailwind",
      },
      {
        icon: <SiNodedotjs size={20} className="text-green-500" />,
        name: "Node.js",
      },
      {
        icon: <SiMongodb size={20} className="text-green-500" />,
        name: "MongoDB",
      },
      {
        icon: <SiTypescript size={20} className="text-blue-700" />,
        name: "Typescript",
      },
      {
        icon: <SiNextdotjs size={20} className="text-black" />,
        name: "Next.js",
      },
      {
        icon: <SiJavascript size={20} className="text-yellow-400" />,
        name: "Javascript",
      },
    ],
  },
  {
    title: "Garage Manager",
    description:
      "A Garage management system that suitable for Automotive Repair shops providing accurate and important data from financies to daily business activities",
    githubUrl: "https://gms.0xzile.sbs",
    imageSrc: "/projects/GMS.png",
    tech: [
      {
        icon: <SiReact size={20} className="text-cyan-400" />,
        name: "React",
      },
      {
        icon: <SiPostgresql size={20} className="text-green-500" />,
        name: "PostgreSQL",
      },
      {
        icon: <SiTypescript size={20} className="text-cyan-500" />,
        name: "Typescript",
      },
      {
        icon: <SiNodedotjs size={20} className="text-green-500" />,
        name: "Node.js",
      },
      {
        icon: <SiNextdotjs size={20} className="text-black" />,
        name: "Next.js",
      },
      {
        icon: <SiNestjs size={20} className="text-blue-700" />,
        name: "Nest.js",
      },
    ],
  },
  {
    title: "Buffalo-Family",
    description:
      "A Music Group Landing website that sales thier merch and promote the sales of Tickets to Albums",
    githubUrl: "https://buffalofamily.club",
    imageSrc: "/projects/BF.png",
    tech: [
      {
        icon: <SiTypescript size={20} className="text-cyan-500" />,
        name: "Typescript",
      },
      {
        icon: <SiNodedotjs size={20} className="text-green-500" />,
        name: "Node.js",
      },
      {
        icon: <SiNextdotjs size={20} className="text-black" />,
        name: "Next.js",
      },
      { icon: <SiReact size={20} className="text-cyan-400" />, name: "React" },
      {
        icon: <SiTailwindcss size={20} className="text-teal-400" />,
        name: "Tailwind",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-white mb-10 mt-5">
          My Projects
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              href={project.githubUrl}
              key={project.title}
              target="_blank"
              className="group block bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:opacity-90"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center space-x-1 bg-gray-700 px-2 py-1 rounded"
                    >
                      {t.icon}
                      <span className="text-xs text-gray-200">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
