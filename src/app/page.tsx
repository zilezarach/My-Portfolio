"use client";
import React from "react";

import Link from "next/link";

import Image from "next/image";
import TechIcons from "./components/TechIcon";

const featured = [
  {
    title: "ZileWatch",
    href: "/projects#zilewatch",
    img: "/projects/zilewatch.png",
  },
  {
    title: "ZaccPos",
    href: "/projects#zaccpos",
    img: "/projects/zaccpos.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* About Section */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/about.jpg"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:ml-8 text-white">
            <h1 className="text-3xl font-bold">
              Greetings!! My Name is Stephen Karani
            </h1>
            <p className="mt-4">
              Alias <span className="font-mono">Ox_zile</span> from Nairobi,
              Kenya who is passionate programmer and also a computer techie who
              into privacy, freedom and open source, Oh ! also a repair man who
              is into Linux and computer architecture for my views,current
              options,thoughts, documentation on my projects check out my blog!
            </p>
            <h1 className="text-3xl font-bold">
              Greetings! I’m Stephen “Ox_zile” Karani
            </h1>
            <p className="mt-4">
              A Nairobi-based programmer & techie who loves privacy, freedom and
              open source. I also tinker with Linux and hardware repair. Check
              out my blog for deep dives!
            </p>
            <hr className="my-4 border-gray-700" />
            {/* CTA Button */}
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-blue-500 text-white
                         font-medium rounded-lg hover:bg-blue-600 transition"
            >
              View My Projects →
            </Link>
          </div>
        </div>

        <div className="mt-2">
          <h2 className="text-xl font-bold mb-7">
            Languages and Frameworks I use on the daily:
          </h2>

          {/* Featured Projects */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {featured.map((p) => (
                <Link
                  href={p.href}
                  key={p.title}
                  className="block bg-gray-900 rounded-lg overflow-hidden
                           shadow hover:shadow-2xl transition"
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Tech Icons */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Languages & Frameworks
            </h2>
            <TechIcons />
          </div>

          {/* GitHub Stats */}
          <hr className="my-6 border-gray-700" />
          <div className="bg-gray-900 shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white">GitHub Stats</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="https://github-readme-stats.vercel.app/api?username=zilezarach&show_icons=true&theme=dark"
                alt="GitHub Stats"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=zilezarach&layout=compact&theme=dark"
                alt="Top Languages"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://ghchart.rshah.org/zilezarach"
                alt="GitHub Contributions"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
