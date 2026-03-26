"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  const handleBtn = () => {
    const password = prompt("Enter your password");
    if (password === "1234") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="container mx-auto">
      <div className=" bg-linear-60 from-sky-300 to-sky-600 py-10 text-center">
        <h1 className="font-semibold text-2xl">Banner page is loading</h1>
        <button
          className="px-4 py-2 text-white rounded-xl mt-5 bg-blue-300 cursor-pointer hover:bg-black duration-300"
          onClick={handleBtn}
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
