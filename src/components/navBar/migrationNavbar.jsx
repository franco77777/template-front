import React from "react";
import MigrationButtonNavbar from "@/components/buttons/migrationButtonNavbar"



function Navbar() {
  return (
    <div>
      <div className="flex h-20  items-center justify-between bg-slate-400 px-4 dark:bg-black">
        <div className="dark:text-white">
          <h1 className="text-4xl max-md:text-xl  ">Demo Dazmin</h1>
        </div>
        <MigrationButtonNavbar />
      </div>
    </div>
  );
}

export default Navbar;
