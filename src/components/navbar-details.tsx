import React from "react";
import Link from "next/link";

const NavbarDetail = () => {
  return (
    <nav className="border-b w-full bg-white">
      <div className="flex h-16 items-center px-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-2 md:gap-4">
          <Link href={"/"} className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl">POKEMON</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDetail;
