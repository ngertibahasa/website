"use client";

import { useRouter } from "next/navigation";
import React from "react";


const ButtonDaftar = () => {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/registrasi')} className="bg-[#1800ad] text-white font-bold px-6 py-2 rounded-xl ease-in-out duration-300 hover:scale-110">
      Daftar
    </button>
  );
};

export default ButtonDaftar;
