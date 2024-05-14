import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavItem({ title, linkto }) {
  return (
    <Link
      to={linkto}
      className="w-[100vw] text-center md:w-fit text-lg md:text-md font-medium text-accent hover:text-accent-hover transition-all duration-200 ease-in-out"
    >
      {title}
    </Link>
  );
}

export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  window.addEventListener("resize", () => {
    setCollapsed(true);
  });

  return (
    <nav className="z-[10] bg-black bg-opacity-25 md:bg-transparent flex items-center px-2 pb-1">
      <Link to={"/"}>
        <img
          className="max-h-[85px]"
          src={`${process.env.PUBLIC_URL}/img/branding.png`}
          alt="FruitfulTech"
          title="FruitfulTech"
          draggable="false"
        />
      </Link>
      <div
        className={`ms-auto gap-x-8 gap-y-2 md:px-5 flex ${
          collapsed
            ? "hidden md:flex"
            : "bg-black bg-opacity-25 md:bg-transparent flex-wrap absolute top-inherit mt-[-80px] translate-y-[100%] left-0 w-[100vw]"
        }`}
      >
        <NavItem title={"Egér"} linkto={"/eger"} />
        <NavItem title={"Billentyűzet"} linkto={"/billentyuzet"} />
        <NavItem title={"Fejhallgató"} linkto={"/fejhallgato"} />
        <NavItem title={"Hangszóró"} linkto={"/hangszoro"} />
        <NavItem title={"Monitor"} linkto={"/monitor"} />
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="block md:hidden ms-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-accent"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}
