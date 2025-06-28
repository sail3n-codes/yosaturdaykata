"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const stored = localStorage.getItem("theme") as "light" | "dark";
  //     if (stored) {
  //       setTheme(stored);
  //       const themeToSet = stored === "light" ? "lemonade" : "dim";
  //       document.documentElement.setAttribute("data-theme", themeToSet);
  //     }
  //   }
  // }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    const themeToSet = newTheme === "light" ? "lemonade" : "dim";
    document.documentElement.setAttribute("data-theme", themeToSet);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="navbar bg-base-300/90 fixed top-0 z-50 shadow-lg">
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
        <a className="btn btn-primary">Login</a>
      </div>
    </header>
  );
}
