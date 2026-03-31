"use client";

import SearchContent from "@/components/search/SearchContent";
import { Suspense } from "react";


export default function Search() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SearchContent />
    </Suspense>
  );
}