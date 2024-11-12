"use client"
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {

  const router= useRouter()
  return (
    <div className="w-full h-screen flex flex-col text-5xl items-center justify-center">
      <div className="cursor-pointer" onClick={()=>{router.push("./tailwind")}}>tailwind</div>
      <div className="cursor-pointer" onClick={()=>{router.push("./css")}}>css</div>
    </div>
  );
};

export default page;
