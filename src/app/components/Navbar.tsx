"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "https://zile-blog.0xzile.sbs", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/gorilla.jpg"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-2 text-xl font-bold text-white">Ox_zile</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => {
              const isExternal = link.href.startsWith("http");
              const isActive =
                link.href === pathname ||
                (link.href !== "/" && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => {
              const isExternal = link.href.startsWith("http");
              const isActive =
                link.href === pathname ||
                (link.href !== "/" && pathname?.startsWith(link.href));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
