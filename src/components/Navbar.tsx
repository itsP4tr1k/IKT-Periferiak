import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartCtx } from "../App";

function NavItem({ title, linkto, onclick }) {
  return (
    <Link
      onClick={onclick}
      to={linkto}
      className="w-[100vw] text-center md:w-fit text-lg md:text-md font-medium text-accent hover:text-accent-hover transition-all duration-200 ease-in-out py-2"
    >
      {title}
    </Link>
  );
}

export default function Navbar() {
  const { cart, setCart } = useContext(CartCtx);
  const [collapsed, setCollapsed] = useState(true);

  let cartSum = 0;

  Object.values(cart).forEach((e) => {
    cartSum = cartSum + Number(e);
  });

  window.addEventListener("resize", () => {
    setCollapsed(true);
  });

  return (
    <nav className="fixed top-0 bg-black bg-opacity-50 md:bg-opacity-0 w-[100vw] flex items-center px-2 pb-1">
      <Link to="/">
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
            : "bg-black bg-opacity-50 md:bg-transparent flex-wrap absolute top-inherit mt-[-160px] translate-y-[100%] left-0 w-[100vw]"
        }`}
      >
        <NavItem
          title="Egér"
          linkto="/termek/eger"
          onclick={() => setCollapsed(true)}
        />
        <NavItem
          title="Billentyűzet"
          linkto="/termek/billentyuzet"
          onclick={() => setCollapsed(true)}
        />
        <NavItem
          title="Fejhallgató"
          linkto="/termek/fejhallgato"
          onclick={() => setCollapsed(true)}
        />
        <NavItem
          title="Hangszóró"
          linkto="/termek/hangszoro"
          onclick={() => setCollapsed(true)}
        />
        <NavItem
          title="Monitor"
          linkto="/termek/monitor"
          onclick={() => setCollapsed(true)}
        />
        <Link
          to="/kosar"
          className="text-white relative px-3 flex justify-center items-center cursor-pointer"
        >
          <h1 className="text-black py-[1px] px-[8px] bg-accent rounded-full font-bold absolute top-[50%] left-[50%] translate-x-[10%] translate-y-[-100%]">
            {cartSum}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-9"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
        </Link>
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
