"use client";

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import TechIcons from "./components/TechIcon";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center">
            <Image src="/about.jpg" alt="Profile" width={150} height={150} className="rounded-full" />
          </div>
          <div className="md:w-1/2 mt-8 md:ml-8 text-white">
            <h1 className="text-3xl font-bold">Greetings!! My Name is Stephen Karani</h1>
            <p className="mt-4">
              Alias <span className="font-mono">Ox_zile</span> from Nairobi, Kenya who is passionate programmer and also
              a computer techie who into privacy, freedom and open source, Oh ! also a repair man who's into Linux and
              computer architecture for my views,current options,thoughts, documentation on my projects check out my
              blog!
            </p>
            <hr className="my-4 border-r-gray-700" />
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-xl font-bold mb-7">Languages and Frameworks I use on the daily:</h2>
          <TechIcons />
        </div>
        <hr className="my-4 border-r-gray-700" />
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
  );
}
