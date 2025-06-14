"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Image src="/gorilla.jpg" alt="logo" width={50} height={50} className="rounded-full" />
          </div>
          <div className="hidden md:flex md:items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-900 transition-colors">
              About Me
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-900 transition-colors">
              My Github Projects
            </Link>
            <Link href="https://zile-blog.0xzile.sbs" className="text-gray-700 hover:text-blue-900 transition-colors">
              Blog Post
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-900 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className=" block px-3 py-2  text-base font-medium text-gray-700 hover:text-blue-900 transition-colors rounded-md ">
              About Me
            </Link>
            <Link
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium 
                text-gray-700 hover:bg-gray-100 transition-colors">
              Projects
            </Link>
            <Link
              href=""
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-900 transition-colors">
              Blog Post
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium 
                text-gray-700 hover:bg-gray-100 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
      <hr className="my-4 border-r-gray-700" />
    </nav>
  );
}
