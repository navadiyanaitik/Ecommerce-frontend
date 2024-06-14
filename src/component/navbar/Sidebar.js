import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Popover from "../Popover/Popover";
import { logoutUser } from "../../pages/Auth/actionCreater";
import { S3_URL } from "../../services/api.service";
import { useDispatch, useSelector } from "react-redux";
import { resetUserProfile } from "../../redux/slice/userProfileSlice";
import { resetUsers } from "../../redux/slice/userSlice";

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isToken, setIsToken] = useState(false);
  const path = location.pathname;
  const user = useSelector((state) => state.userProfile.user);
  const dispatch = useDispatch();

  useEffect(() => {
    let hasToken = localStorage.getItem("token");

    if (hasToken) {
      setIsToken(true);
    } else {
    }
  }, []);

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result?.success) {
      localStorage.removeItem("token");
      dispatch(resetUserProfile());
      dispatch(resetUsers());
      window.location.reload();
    }
  };

  return (
    <>
      <div
        className={`fixed bg-white ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 inset-y-0 left-0 w-auto z-50`}
      >
        <div
          className="d-flex flex-column flex-shrink-0 p-3 sm:p-5 h-full bg-body-tertiary"
          style={{ width: "280px" }}
        >
          <div
            className="nav-logo font-medium text-2xl text-primary leading-[36px] px-0.5 sm:py-2.5"
            onClick={() => {
              navigate("/");
            }}
          >
            Fashion Hub
          </div>
          <hr className="my-2 mt-2.5" />
          <div className="h-[calc(100%_-_68px)]  overflow-auto flex flex-col justify-between">
            <ul>
              <li className="py-1">
                <Link
                  to="/"
                  className={`${
                    path === "/"
                      ? "text-primary font-semibold"
                      : " text-black text-opacity-70"
                  } my-1.5 block`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {isToken && user?.role === "admin" && (
                <li className="py-1">
                  <Link
                    to="/admin/dashboard"
                    className={`${
                      path === "/dashboard"
                        ? "text-primary font-semibold"
                        : " text-black text-opacity-70"
                    } my-1.5 block`}
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              <li className="py-1">
                <Link
                  to="/product"
                  className={`${
                    path === "/product"
                      ? "text-primary font-semibold"
                      : " text-black text-opacity-70"
                  } my-1.5 block`}
                >
                  Product
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to="#"
                  className={`${
                    path === "/contact"
                      ? "text-primary font-semibold"
                      : " text-black text-opacity-70"
                  } my-1.5 block`}
                >
                  Contact
                </Link>
              </li>
              <li className="py-1">
                <Link
                  to="#"
                  className={`${
                    path === "/about"
                      ? "text-primary font-semibold"
                      : " text-black text-opacity-70"
                  } my-1.5 block`}
                >
                  About
                </Link>
              </li>
            </ul>
            {isToken && user && (
              <div>
                <hr className="mb-5" />
                <div className="flex items-center">
                  <Popover
                    buttonContent={
                      <div className="flex items-center">
                        <img
                          src={
                            user
                              ? S3_URL + user?.avatar
                              : "/images/profile.jpeg"
                          }
                          className="w-10 h-10 rounded-full mr-2"
                          alt="profile"
                        />
                        <Icon
                          icon="icon-park-solid:down-one"
                          className="text-lg text-gray-500"
                        />
                      </div>
                    }
                    className="max-w-[120px] w-full"
                  >
                    <div className="bg-white border p-1.5 border-blue shadow-sm rounded-lg max-w-[180px] w-full">
                      <ul>
                        <li className="mb-1">
                          <Link
                            to={"/profile"}
                            className="text-sm p-1 hover:text-blue rounded-sm font-medium block"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <span
                            className="text-sm p-1 hover:text-danger rounded-sm font-medium block"
                            onClick={handleLogout}
                          >
                            logout
                          </span>
                        </li>
                      </ul>
                    </div>
                  </Popover>
                  <span className="ml-3">{user?.name}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {open && (
        <div
          className={`fixed inset-0 z-30 bg-black bg-opacity-50`}
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Sidebar;
