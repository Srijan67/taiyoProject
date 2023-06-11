import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ sidebarVisible }: { sidebarVisible: boolean }) => {
  return (
    <div
      className={`flex-1 ${
        sidebarVisible ? "w-32" : "w-0"
      } transition-width duration-300 ease-in-out`}
    >
      <nav className="flex flex-col h-full">
        <NavLink
          to="/"
          className="p-4 text-white hover:bg-gray-200"
          // @ts-ignore
          activeClassName="bg-gray-200 text-gray-800"
          exact
        >
          All Contacts
        </NavLink>
        <NavLink
          to="/add"
          className="p-4 text-white hover:bg-gray-200"
          // @ts-ignore
          activeClassName="bg-gray-200 text-gray-800"
        >
          Add Contact
        </NavLink>
        <NavLink
          to="/covid"
          className="p-4 text-white hover:bg-gray-200"
          // @ts-ignore
          activeClassName={"bg-gray-200 text-gray-800"}
        >
          Covid Chart
        </NavLink>
      </nav>
    </div>
  );
};

export default SideBar;
