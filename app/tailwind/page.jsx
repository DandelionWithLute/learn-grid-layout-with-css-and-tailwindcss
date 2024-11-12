import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen grid grid-cols-3 gap-5">
      <div className="grid-1 border-black border col-span-2 row-span-2">1</div>
      <div className="grid-2 border-black border col-span-2 row-span-2">2</div>
      <div className="grid-3 border-black border">3</div>
      <div className="grid-4 border-black border">4</div>
      <div className="grid-5 border-black border">5</div>
      <div className="grid-6 border-black border">6</div>
    </div>
  );
};

export default page;
