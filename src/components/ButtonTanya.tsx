"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ButtonTanya = () => {
  const router = useRouter()
  return (
    <button onClick={() => router.push('/konsultasi')} className="bg-[#e4c735] text-black font-bold px-6 py-2 rounded-xl ease-in-out duration-300 hover:scale-110">
      Konsultasi
    </button>
  );
};

export default ButtonTanya;
