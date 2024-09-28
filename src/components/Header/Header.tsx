import Link from "next/link";
import React from "react";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="flex justify-between px-10 py-5 md:px-24 max-w-[1000px] mx-auto">
      <Link href={"/"} className="text-2xl font-bold underline">
        Sanity Blog
      </Link>

      <Navbar />
    </header>
  );
};

export default Header;
