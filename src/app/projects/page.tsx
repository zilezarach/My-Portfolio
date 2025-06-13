"use client";

import Link from "next/link";

const projects = [
  {
    title: "ZileWatch",
    description:
      "Streamer for movies and videos for socials, ultra fast downloads, An entertainment powerhouse",
    githubUrl: "https://github.com/zilezarach/ZileWatch",
  },
  {
    title: "ZaccPos",
    description:
      "A Pos system that also acts as a e-commerce best for business with large scale",
    githubUrl: "https://github.com/zilezarach/Point-of-sale-application",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-white mb-8">My Projects</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((project, index) => (
            <Link href={project.githubUrl} key={index} target="_blank">
              <div className="bg-gray-900 shadow-md rounded-lg p-6 hover:shadow-2xl transition cursor-pointer">
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
