"use client";

import { SubHeader } from "@/components/home/sub-Header";
import ResultLists from "@/components/search/result-list";
import { SearchMedia } from "@/services/getAllTrends";
import { Medias } from "@/types/music";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchContent() {
  const [Loading, setLoading] = useState(false);
  const [Searchs, setSearchs] = useState<Medias[] | []>([]);
  const query = useSearchParams();
  const q = query.get("query");

  async function FindSearch() {
    setLoading(true);
    try {
      const results = await SearchMedia(q as string);
      setSearchs(results);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (q) {
      FindSearch();
    }
  }, [q]);

  return (
    <div className="w-full">
      {q?.trim() && (
        <h2 className="text-xl px-0.5 font-medium mt-4">
          Resultados de '{q}'
        </h2>
      )}

      <SubHeader title="Search" />

      {Loading && (Searchs?.length ?? 0) === 0 && (
        <div className="text-2xl flex flex-col items-center justify-center mt-10">
          <h2>Pesquisando, aguarde!</h2>
          <div className="flex flex-row gap-4 justify-center items-center mt-5">
            <div className="size-4 bg-red-500 rounded-full animate-bounce duration-100"></div>
            <div className="size-4 bg-red-500 rounded-full animate-bounce duration-300"></div>
            <div className="size-4 bg-red-500 rounded-full animate-bounce duration-700"></div>
          </div>
        </div>
      )}

      {Searchs && <ResultLists music={Searchs} />}
    </div>
  );
}