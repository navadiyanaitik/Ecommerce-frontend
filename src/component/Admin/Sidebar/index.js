import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import DashRoutes from "../../../constant/dashboardRoutes.json";
import clsx from "clsx";

const Sidebar = ({ setIsExpanded, isExpanded }) => {
  return (
    <React.Fragment>
      <div
        className={clsx(
          isExpanded ? "left-0" : "-left-52 md:left-0",
          "w-52 transition-all duration-300 ease-out border-r border-gray-500  bg-white fixed inset-y-0 h-full z-40 md:z-10"
        )}
      >
        <div className="h-full md:h-[calc(100vh_-_80px)] md:mt-20 py-6 px-4 overflow-y-auto">
          <div className="mb-6">
            <h1 className="block md:hidden">
              <Link
                to={"/"}
                className="nav-logo font-medium text-2xl sm:text-xl text-primary cursor-pointer"
              >
                Fashion Hub
              </Link>
            </h1>
          </div>
          {DashRoutes.map((route) => {
            return (
              <React.Fragment>
                <Link
                  to={route.path}
                  className="flex items-center cursor-pointer mb-4 p-2 group"
                  key={route.id}
                >
                  <span className="mr-3">
                    <Icon
                      icon={route.icon}
                      className="text-2xl text-gray-500 group-hover:text-gray-800"
                    />
                  </span>
                  <span className="text-gray-500 group-hover:text-gray-900">
                    {route.title}
                  </span>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div
        className={clsx(
          isExpanded ? "block" : "hidden",
          "fixed inset-0 z-30 bg-black/45"
        )}
        onClick={() => {
          setIsExpanded(false);
        }}
      />
    </React.Fragment>
  );
};

export default Sidebar;
