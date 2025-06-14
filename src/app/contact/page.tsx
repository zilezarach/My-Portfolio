"use client";

import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-lg shadow-lg p-8">
          <h1 className="text-white text-center text-3xl font-bold mb-4">Want to get in touch?</h1>
          <div className="flex flex-col items-center space-y-4">
            <a href="mailto:zarachiistephen@gmail.com" className="text-blue-400 hover:underline text-lg">
              <MdMarkEmailRead className="inline-block mr-2" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/steve-karani-3a22a7330/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg">
              <FaLinkedinIn className="inline-block mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/zilezarach"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-lg">
              <FaGithub className="inline-block mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
