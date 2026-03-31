"use client";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter } from "next/navigation";
import { SearchInput } from "../UI/search-input";

export function SubHeader({ title = "Populares", defaultValue = "" }) {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <div className="w-full items-center justify-center sm:justify-between  sm:p-2.5 mt-4 flex">
      <div className="flex items-center">
        {pathName !== "/home" && (
          <button
            onClick={() => router.back()}
            title="Voltar"
            aria-label="Voltar"
            className="cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="size-10 text-2xl text-gray-500"
            />
          </button>
        )}
        <h2 className="text-2xl select-none text-center sm:text-start  font-semibold sm:font-bold">{title}</h2>
      </div>
      <div className="sm:block hidden">
        <SearchInput defaultValue={defaultValue} />
      </div>
    </div>
  );
}
