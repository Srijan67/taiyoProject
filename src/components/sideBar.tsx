import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ sidebarVisible }: { sidebarVisible: boolean }) => {
  return (
    <div
      className={`${
        sidebarVisible ? "left-0" : "-left-32"
      } absolute h-full bg-blue-900 w-32 transition-left duration-300`}
    >
      <nav className="flex flex-col h-full">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
              : isActive
              ? "p-4 bg-indigo-600 text-white"
              : "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
          }
        >
          All Contacts
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive, isPending }) =>
            isPending
              ? "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
              : isActive
              ? "p-4 bg-indigo-600 text-white"
              : "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
          }
        >
          Add Contact
        </NavLink>
        <NavLink
          to="/covid"
          className={({ isActive, isPending }) =>
            isPending
              ? "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
              : isActive
              ? "p-4 bg-indigo-600 text-white"
              : "p-4 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
          }
        >
          Covid Chart
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
