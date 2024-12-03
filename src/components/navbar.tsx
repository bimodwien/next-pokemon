"use client";
import * as React from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, X } from "lucide-react";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center md:gap-4">
        <div className="flex items-center gap-2 md:gap-4">
          <Link href={"/"} className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl">POKE</span>
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <form action="" className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="md:hidden"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
          >
            {isSearchVisible ? (
              <X className="h-5 w-5" />
            ) : (
              <Search className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle Search</span>
          </Button>
        </div>
      </div>
      {isSearchVisible && (
        <div className="md:hidden px-4 pb-4">
          <form action="">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4  text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-full"
              />
            </div>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
