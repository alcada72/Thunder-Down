"use client";

import LightningLoader from "@/components/UI/loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="size-full min-h-screen flex flex-col items-center justify-center">
      <LightningLoader />
    </div>
  );
}