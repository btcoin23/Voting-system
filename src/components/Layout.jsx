import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="w-100 h-[100vh] flex flex-col items-center bg-gray-400 gap-4 p-4">
      <Navbar />
      <main className="flex justify-center w-1/2 h-4/5 bg-gray-600 rounded-lg">{children}</main>
    </div>
  );
};

export default Layout;
