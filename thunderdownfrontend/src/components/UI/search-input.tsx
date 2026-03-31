"use client";

import baseURL from "@/api/baseUrl";
import { useDebounce } from "@/hook/useDebounce";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "./input";


type Props = {
  defaultValue?: string;
  hideOnSearch?: boolean;
};

export const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
  const router = useRouter();
  const pathName = usePathname();

  const [searchInput, setSearchInput] = useState(defaultValue ?? "");
  const debouncedQuery = useDebounce(searchInput);

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setSearchInput(defaultValue ?? "");
  }, [defaultValue]);

  // 🔥 buscar sugestões
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();

    const fetchSuggestions = async () => {
      try {
        const res = await fetch(
          `${baseURL}/api/sugestions?query=${debouncedQuery}`,
          {
            signal: controller.signal,
            cache: "no-store",
          }
        );

        const data = await res.json();
        setSuggestions(data);
        setShowDropdown(true);
      } catch (err: any) {
        if (err.name !== "AbortError") console.error(err);
      }
    };

    fetchSuggestions();

    return () => controller.abort();
  }, [debouncedQuery]);

  const handleSearchEnter = () => {
    if (searchInput.trim()) {
      router.push(
        `/home/search?query=${encodeURIComponent(searchInput)}`
      );
      setShowDropdown(false);
    }
  };

  // 🎹 teclado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }

    if (e.key === "Enter") {
      if (activeIndex >= 0) {
        const selected = suggestions[activeIndex];
        setSearchInput(selected);
        router.push(
          `/home/search?query=${encodeURIComponent(selected)}`
        );
      } else {
        handleSearchEnter();
      }
      setShowDropdown(false);
    }
  };

  if (hideOnSearch && pathName === "/search") return null;

  return (
    <div className="relative w-full">
      <Input
        placeholder="Pesquisar..."
        icon={faMagnifyingGlass}
        filled
        value={searchInput}
        onChange={(texto) => {
          setSearchInput(texto);
          setActiveIndex(-1);
        }}
        onEnter={handleSearchEnter}
        onKeyDown={handleKeyDown as any} // 👈 garante que passa pro input
        onFocus={() => suggestions.length && setShowDropdown(true)}
      />

      {/* 🔽 dropdown */}
      {showDropdown && suggestions.length > 0 && (
        <ul className="absolute w-full bg-black mt-1 rounded shadow-lg z-40 border-0">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSearchInput(item);
                router.push(
                  `/home/search?query=${encodeURIComponent(item)}`
                );
                setShowDropdown(false);
              }}
              className={`p-0.5 hover:bg-gray-600 cursor-pointer truncate block ${
                index === activeIndex ? "bg-gray-700" : ""
              }`}
            >
              🔍 {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};