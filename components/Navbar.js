import React from "react";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <div className=" duration-1000 bg-red-500 fixed z-10 dark:bg-yellow-500 w-full p-5 h-12 flex justify-between items-center ">
      Navbar
      <ThemeSwitch/>
    </div>
  );
}

export default Navbar;
