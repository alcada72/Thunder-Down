"use client";
import { faQuestion, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { Label, Logo } from "./logo";
import { SearchInput } from "./search-input";

export default function Header() {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <header
      className="sticky z-50 top-0 border-b border-b-slate-50 bg-red-800 flex flex-col
    sm:flex-row  items-center justify-center p-4 sm:p-4 pb-2 w-full"
    >
      <div className="flex justify-between items-center w-full max-w-3xl">
        <div className="flex items-center gap-2">
          <Logo size={60} />
          <div className="hidden md:block">
            <Label size={100} black />
          </div>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex gap-4">
            <li>
              <Link href={"/home"}>Home</Link>
            </li>
            <li>
              <Link href={"/home/search"}>Search</Link>
            </li>
            <li>
              <Link href={"/download"}>Download</Link>
            </li>
            <li className="transition-all size-7 flex items-center justify-center gap-1cursor-pointer duration-300 hover:scale-110 hover:bg-black hover:text-white text-black rounded-full">
              <Link href={"/about"} title="Saiba mais sobra a Thunder Down">
                <FontAwesomeIcon icon={faQuestion} className="size-5" />
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex gap-5 items-center sm:hidden">
          <span className="cursor-pointer hover:scale-110">
            <FontAwesomeIcon
              icon={faSearch}
              onClick={() => setshowMenu(!showMenu)}
              className="size-5"
            />
          </span>
          <span className="transition-all size-7 flex items-center justify-center gap-1cursor-pointer duration-300 hover:scale-110 hover:bg-black hover:text-white text-black rounded-full">
            <Link href={"/about"} title="Saiba mais sobra a Thunder Down">
              <FontAwesomeIcon icon={faQuestion} className="size-5" />
            </Link>
          </span>
        </nav>
      </div>

      {showMenu && (
        <div className="w-full sm:hidden flex justify-center items-center mt-4">
          <SearchInput />
        </div>
      )}
    </header>
  );
}
