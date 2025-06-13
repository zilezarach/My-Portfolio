"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiArchlinux,
  SiVercel,
  SiTypescript,
  SiJavascript,
  SiGo,
  SiPython,
  SiDocker,
  SiNeovim,
  SiExpo,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiNpm,
} from "react-icons/si";

export default function TechIcons() {
  return (
    <div className=" flex flex-wrap gap-5 justify-center">
      <div className="flex flex-col items-center">
        <SiNextdotjs size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Next.js</span>
      </div>
      <div className="flex flex-col items-center">
        <SiReact size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">React</span>
      </div>
      <div className="flex flex-col items-center">
        <SiTailwindcss size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Tailwind CSS</span>
      </div>
      <div className="flex flex-col items-center">
        <SiNodedotjs size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Node.js</span>
      </div>
      <div className="flex flex-col items-center">
        <SiArchlinux size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Arch Linux</span>
      </div>
      <div className="flex flex-col items-center">
        <SiVercel size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Vercel</span>
      </div>
      <div className="flex flex-col items-center">
        <SiTypescript size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">TypeScript</span>
      </div>
      <div className="flex flex-col items-center">
        <SiJavascript size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">JavaScript</span>
      </div>
      <div className="flex flex-col items-center">
        <SiGo size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Golang</span>
      </div>
      <div className="flex flex-col items-center">
        <SiPython size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Python</span>
      </div>
      <div className="flex flex-col items-center">
        <SiDocker size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Docker</span>
      </div>
      <div className="flex flex-col items-center">
        <SiNeovim size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Neovim</span>
      </div>
      <div className="flex flex-col items-center">
        <SiExpo size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Expo</span>
      </div>
      <div className="flex flex-col items-center">
        <SiPostgresql size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Postgresql</span>
      </div>
      <div className="flex flex-col items-center">
        <SiMongodb size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Mongodb</span>
      </div>
      <div className="flex flex-col items-center">
        <SiGit size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">Git</span>
      </div>
      <div className="flex flex-col items-center">
        <SiNpm size={40} className="text-white" />
        <span className="mt-1 text-sm text-white">NPM</span>
      </div>
    </div>
  );
}
