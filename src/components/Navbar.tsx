import React from "react";
import { Link } from "react-router-dom";

function NavItem({ title, linkto }) {
  return (
    <Link
      to={linkto}
      className="text-md font-medium text-accent hover:text-accent-hover"
    >
      {title}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed w-[100vw] flex items-center px-2">
      <Link to={"/"}>
        <img
          className="max-h-[85px]"
          src={`${process.env.PUBLIC_URL}/img/branding.png`}
          alt="FruitfulTech"
          title="FruitfulTech"
          draggable="false"
        />
      </Link>
      <div className="ms-auto flex gap-x-8 px-5">
        <NavItem title={"Egér"} linkto={"/eger"} />
        <NavItem title={"Billentyűzet"} linkto={"/billentyuzet"} />
        <NavItem title={"Fejhallgató"} linkto={"/fejhallgato"} />
        <NavItem title={"Hangszóró"} linkto={"/hangszoro"} />
        <NavItem title={"Monitor"} linkto={"/monitor"} />
      </div>
    </nav>
  );
}
