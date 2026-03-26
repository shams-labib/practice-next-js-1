import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-5 container mx-auto">
      <Link
        href={"/"}
        className="px-4  text-black font-bold rounded-2xl py-2 bg-white"
      >
        Story 2.0
      </Link>

      <ul className="space-x-5">
        <NavLink href={"/stories"}>Stories</NavLink>
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/tutorials"}>Tutorials</NavLink>
        <NavLink href={"/dashboard"}>Dashboard</NavLink>
        <NavLink href={"/login"}>Login</NavLink>
        <NavLink href={"/register"}>Register</NavLink>
      </ul>
    </header>
  );
};

export default Header;
