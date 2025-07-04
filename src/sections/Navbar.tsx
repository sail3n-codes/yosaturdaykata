"use client";
import SearchButton from "@/components/SearchButton";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [theme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // const stored = localStorage.getItem("theme") as "light" | "dark";
      // if (stored) {
      //   setTheme(stored);
      //   const themeToSet = stored === "light" ? "lemonade" : "dim";
      //   document.documentElement.setAttribute("data-theme", themeToSet);
      // }
      const themeToSet = theme === "light" ? "lemonade" : "dim";
      document.documentElement.setAttribute("data-theme", themeToSet);
    }
  }, [theme]);

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   const themeToSet = newTheme === "light" ? "lemonade" : "dim";
  //   document.documentElement.setAttribute("data-theme", themeToSet);
  //   localStorage.setItem("theme", newTheme);
  // };

  return (
    <div className="sticky top-0 flex flex-col z-50 w-full">
      <div className="bg-secondary text-secondary-content py-2 text-sm w-full">
        <div className="flex flex-col mx-3 md:flex-row justify-between items-center gap-2 sm:mx-10">
          {/* Left side - Contact Info */}
          <div className="flex flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a
                href="tel:+9779800000000"
                className="hover:text-primary-content/80 transition-colors"
              >
                +977-9800000000
              </a>
            </div>
            <div className="w-px h-4 bg-primary-content/30"></div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:email@yosaturday.com"
                className="hover:text-primary-content/80 transition-colors"
              >
                email@yosaturday.com
              </a>
            </div>
          </div>

          {/* Right side - Additional Info & Social */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* Social Media Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-content/80 transition-colors"
                aria-label="Facebook"
              >
                <p>Facebook</p>
              </a>
              <div className="w-px h-4 bg-primary-content/30"></div>

              <a
                href="https://instagram.com/yosaturdaykata"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-content/80 transition-colors"
                aria-label="Instagram"
              >
                <p>Instagram</p>
              </a>
              <div className="w-px h-4 bg-primary-content/30"></div>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-content/80 transition-colors"
                aria-label="Twitter"
              >
                <p>Tiktok</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <header className="navbar bg-base-300 z-50 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Events</a>
              </li>
              <li>
                <a>Destinations</a>
              </li>
              <li>
                <a>Blogs</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
            </ul>
          </div>
          <Link className="flex gap-3 items-center" href="/">
            <Image
              src={`/images/logo.png`}
              alt={"logo"}
              width={50}
              height={20}
              className=""
            />
            <div className="logo-text">YoSaturdayKata</div>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/events" className="nav-links">
                Events
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="nav-links">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="nav-links">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/shop" className="nav-links">
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          {/* <div className="btn btn-sm" onClick={toggleTheme}>
          {theme === "light" ? "☀️" : "🌙"}
        </div> */}
          <SearchButton />
          <Link href="/booking" className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </header>
    </div>
  );
}
